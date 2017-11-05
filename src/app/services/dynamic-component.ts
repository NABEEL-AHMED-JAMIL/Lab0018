import { Injectable } from '@angular/core';
import { IConfigurableField } from '@btas/common/configurable-field';
import { DynamicInputComponent } from '@btas/components/input/dynamic-input.component';
import { DynamicTextAreaComponent } from '@btas/components/textarea/dynamic-textarea.component';
import { DynamicCheckboxComponent } from '@btas/components/checkbox/dynamic-checkbox.component';
import {
  MultiselectCheckboxComponent
} from '@btas/components/checkbox/multiselect-checkbox.component';
import { DynamicAddressComponent } from '@btas/components/address/dynamic-address.component';
import { DynamicDateComponent } from '@btas/components/date/dynamic-date.component';
import { DynamicDropdownComponent } from '@btas/components/dropdown/dynamic-dropdown.component';
import { DynamicRadioComponent } from '@btas/components/radio/dynamic-radio.component';
import { DynamicCurrencyComponent } from '@btas/components/currency/dynamic-currency.component';
import { Currency } from '@btas/common/currency';
import { ModalFieldComponent } from '@btas/components/modal/modal-field.component';
import { TabularFieldComponent } from '@btas/components/tabular/tabular-field-component';

import { ReferenceService } from '@btas/services/reference';


@Injectable()
export class DynamicComponentService {

  constructor(private referenceService: ReferenceService) {}

  public getTextComponent(metadata: IConfigurableField<any>): any {
    return {
      component: DynamicInputComponent,
      inputs: {
        ...metadata,
        readonly: true
      }
    };
  }

  public getInputComponent(inputType: string, metadata: IConfigurableField<any>): any {
    switch (inputType) {
      default:
        return {
          component: DynamicInputComponent,
          inputs: metadata
        };
    }
  }

  public getDateComponent(inputType: string, metadata: IConfigurableField<any>): any {
    switch (inputType) {
      case 'text':
        return{
          component: DynamicDateComponent,
          inputs: {
            ...metadata,
            readonly: true
          }
        };
      default:
        return {
          component: DynamicDateComponent,
          inputs: metadata
      };
    }
  }

  public getSelectComponent(inputType: string, metadata: IConfigurableField<any>): any {
    switch (inputType) {
      case 'text':
        return {
          component: DynamicDropdownComponent,
          inputs: {
            ...metadata,
            readonly: true
          }
        };
      default:
        return {
          component: DynamicDropdownComponent,
          inputs: metadata
        };
    }
  }

  public getTextAreaComponent(metadata: IConfigurableField<any>): any {
      return {
        component: DynamicTextAreaComponent,
        inputs: metadata
      };
  }

  public getCheckboxComponent(inputType: string, metadata: IConfigurableField<any>): any {
      switch (inputType) {
        case 'multiselect':
          return {
            component: MultiselectCheckboxComponent,
            inputs: metadata
          };
        default:
          return {
            component: DynamicCheckboxComponent,
            inputs: metadata
        };
      }
  }

  public getRadioComponent(inputType: string, metadata: IConfigurableField<any>): any {
    switch (inputType) {
      case 'text':
        return{
          component: DynamicRadioComponent,
          inputs: {
            ...metadata,
            readonly: true
          }
        };
      default:
        return {
          component: DynamicRadioComponent,
          inputs: metadata
      };
    }
  }

  public getAddressComponent(metadata: IConfigurableField<any>): any {
    return {
      component: DynamicAddressComponent,
      inputs: metadata
    };
  }

  public getCurrencyComponent(subtype: string, metadata: IConfigurableField<Currency>): any {
    return {
      component: DynamicCurrencyComponent,
      inputs: metadata
    };
  }

  public getModalComponent(subtype: string, metadata: IConfigurableField<any>): any {
    return {
      component: ModalFieldComponent,
      inputs: metadata
    };
  }

  public getTableComponent(subtype: string, metadata: IConfigurableField<any>): any {
    return {
      component: TabularFieldComponent,
      inputs: metadata
    };
  }

  public getComponentData(metadata: IConfigurableField<any>): any {
    if (!metadata) {
      return null;
    }
    const delimiter = ':';
    const identifier = metadata.type;
    let domain = identifier;
    let subtype;

    if (-1 !== identifier.indexOf(delimiter)) {
      const divided = identifier.split(delimiter);
      domain = divided[0];
      subtype = divided[1];
    }

    let input = metadata;
    const options = input.options;
    if ('string' === typeof(options) && options.startsWith('$.')) {
      input = {
        ...metadata,
        options: this.referenceService.resolve(options)
      };
    }

    switch (domain) {
      case 'checkbox':
        return this.getCheckboxComponent(subtype, input);
      case 'date':
        return this.getDateComponent(subtype, input);
      case 'select':
        return this.getSelectComponent(subtype, input);
      case 'radio':
        return this.getRadioComponent(subtype, input);
      case 'text':
        return this.getTextComponent(input);
      case 'textarea':
        return this.getTextAreaComponent(input);
      case 'address':
        return this.getAddressComponent(input);
      case 'currency':
        return this.getCurrencyComponent(subtype, input);
      case 'table':
        return this.getTableComponent(subtype, input);
      case 'modal':
        return this.getModalComponent(subtype, input);
      case 'input':
      default:
        return this.getInputComponent(subtype, input);
    }
  }

}
