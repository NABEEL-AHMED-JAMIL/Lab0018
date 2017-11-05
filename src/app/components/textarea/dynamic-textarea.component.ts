import { Component, OnInit } from '@angular/core';

import { BaseDynamicComponent } from '@btas/components/dynamic/base-dynamic.component';

/**
 *
 * Custom Textarea Component
 * @param value value of the textarea
 * @param rows number of rows of textarea
 * @param cols number of cols of textarea
 * @param disable disable the textarea
 * @param require mandatory to fill textarea
 *
 */
@Component({
    selector: 'btas-textarea',
    templateUrl: 'dynamic-textarea.component.pug',
    styleUrls: ['./dynamic-textarea.component.scss']
})
export class DynamicTextAreaComponent extends BaseDynamicComponent implements OnInit {

  protected defaultFieldOptions = {
    rows: 2,
    cols: 20
  };

  public ngOnInit(): void {
    this.fieldConfig.fieldOptions = {
      ...this.defaultFieldOptions,
      ...this.fieldConfig.fieldOptions
    };
  }

}
