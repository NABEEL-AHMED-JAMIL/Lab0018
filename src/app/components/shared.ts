import { FormBuilder, FormGroup, ValidatorFn, AbstractControl }
  from '@angular/forms';
import { IGroupPanelItem } from '@btas/components/group-panel/group-panel-item';
import { IConfigurableField } from '@btas/common/configurable-field';

const META_KEY = 'DynamicComponentMeta';

export declare type TGroupFn =
  (field: IConfigurableField<any>) => Array<string | symbol | IConfigurableField<any>>;
export declare type TGroupValidatorsFn = (field: IConfigurableField<any>) => ValidatorFn[];

export interface DynamicComponentMeta {
  name: string;
  isArray?: boolean;
  groupFn?: TGroupFn;
  groupValidatorsFn?: TGroupValidatorsFn;
}

export class DynamicComponentResolver {
  public static resolveMeta(selector: string): DynamicComponentMeta {
    const component = DynamicComponentResolver.componentLookup.get(selector);
    const desc = component ? Reflect.getOwnPropertyDescriptor(component, META_KEY) : null;

    return desc && desc.value;
  }

  public static register(selector: string, component: Function) {
    DynamicComponentResolver.componentLookup.set(selector, component);
  }

  private static componentLookup = new Map<string, Function>();
}

export function DynamicComponentDecorator(f: DynamicComponentMeta) {
  return (target) => {
    Reflect.defineProperty(target, META_KEY, { value: f });
    DynamicComponentResolver.register(f.name, target);
  };
};

/**
 * Creates a form group using the provided formbuilder based on the group panel item
 * config.
 *
 * Optionally the form group is initialised with itemModel data if provided.
 *
 * @param fb the formbuilder. Usually provided obtained via component injection
 * @param itemConfig the IGroupPanelItem config to use. Specifically only the field
 *  config are of interest in order to create only form control entries per field.
 */
export function createGroupPanelFormGroup(
  fb: FormBuilder, itemConfig: IGroupPanelItem, itemModel?: any
): FormGroup {
  const summaryDef =
    itemConfig.summary ? _createFormGroupDef(fb, itemConfig.summary, itemModel) : {};

  const fieldDef =
    itemConfig.fields ? _createFormGroupDef(fb, itemConfig.fields, itemModel) : {};

  return fb.group({
    ...summaryDef,
    ...fieldDef
  });
}

function _isDisplayOnly(field: IConfigurableField<any> | any) {
  return !(typeof(field) === 'string' || !field.displayOnly);
}

function _createFormGroupDef(
  fb: FormBuilder,
  fields: Array<string | symbol | IConfigurableField<any>>,
  itemModel?: any): { [key: string]: AbstractControl } {
  return (fields.reduce((acc, field) => {
    const fieldName = typeof(field) === 'string' || typeof(field) === 'symbol' ? field : field.name;
    if (!_isDisplayOnly(field)) {
      acc[fieldName] = _createFormControl(fb, field, itemModel && itemModel[fieldName]);
    }
    return acc;
  }, {}));
}

export function createFormGroup(
  fb: FormBuilder,
  fields: Array<string | symbol | IConfigurableField<any>>,
  validators: ValidatorFn | ValidatorFn[],
  itemModel?: any
): FormGroup {
  const res = fb.group(_createFormGroupDef(fb, fields, itemModel));
  if (validators) {
    res.setValidators(validators);
  }

  return res;
}

function _createFormControl(
  fb: FormBuilder,
  field: string | symbol | IConfigurableField<any>, itemModel?: any): AbstractControl {

  const { fieldName, meta, typedField, validators } =
    typeof(field) === 'string' || typeof(field) === 'symbol' ?
      { fieldName: <string> field, meta: null, typedField: null, validators: null }
    : { fieldName: field.name,
        meta: DynamicComponentResolver.resolveMeta(field.type),
        typedField: <IConfigurableField<any>> field,
        validators: field.validation,
      };
  let res: AbstractControl = null;

  if (!meta) {
    res = fb.control(itemModel && itemModel[fieldName], validators);
  } else if (meta.isArray) {
    const itemAsArray = <any[]> itemModel || [];
    const groups = meta.groupFn && meta.groupFn(typedField);
    const groupValidators = meta.groupValidatorsFn && meta.groupValidatorsFn(typedField);
    const createFn: (data: any) => AbstractControl = groups
      ? (item) => createFormGroup(fb, groups, groupValidators, item)
      : (item) => fb.control(item);

    res = fb.array(itemAsArray.map(createFn));
    if (validators) { res.setValidators(validators); }
  } else if (meta.groupFn) {
    const groups = meta.groupFn(typedField);

    res = createFormGroup(fb, groups, validators, itemModel);
  } else {
    res = fb.control(itemModel, validators);
  }

  return res;
}
