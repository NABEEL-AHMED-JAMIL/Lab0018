import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { BaseDynamicComponent } from '@btas/components/dynamic/base-dynamic.component';
import { DynamicComponentDecorator, createFormGroup } from '@btas/components/shared';
import { ITabularFieldOption } from '@btas/components/tabular/tabular';
import { FormArray, FormBuilder } from '@angular/forms';

const groupFn = (field) => field.fieldOptions.columns;

@Component({
    selector: 'btas-tabular-component',
    templateUrl: './tabular-field-component.pug',
    styleUrls: ['./tabular-field-component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@DynamicComponentDecorator({
  name: 'table',
  isArray: true,
  groupFn
})
export class TabularFieldComponent extends BaseDynamicComponent implements OnInit {
  public formArray: FormArray;

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {
    super();
  }

  public ngOnInit(): void {
    const tabOpts = <ITabularFieldOption> this.fieldConfig.fieldOptions;

    tabOpts.columns.forEach(c => {
      if (tabOpts.hideCellLabels !== false) {
        c.labelPosition = c.labelPosition || 'hidden';
      }

      if (tabOpts.autoFit !== false) {
        c.fieldSpan = c.fieldSpan || 12;
      }
    });

    this.formArray = <FormArray> this.formGroup.controls[this.fieldConfig.name];
  }

  public onAdd(rowNumber: number) {
    this.formArray.insert(
      rowNumber || this.formArray.controls.length,
      createFormGroup(this.fb, this.fieldConfig.fieldOptions.columns,
                      this.fieldConfig.validation)
    );
    this.cdr.markForCheck();
  }

  public onDelete(rowNumber: number) {
    this.formArray.removeAt(rowNumber);
    this.cdr.markForCheck();
  }

  public trackRow(index: number, row: any) {
    return index;
  }

}
