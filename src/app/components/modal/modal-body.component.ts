import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IGroupPanelItem } from '@btas/components/group-panel/group-panel-item';
import { IModal } from './modal';


/**
 *
 * Modal Body Component
 * Will be used with Modal, will generate body for the modal
 *
 */
@Component({
    selector: 'btas-modal-body',
    templateUrl: './modal-body.component.pug'
})
export class ModalBodyComponent implements OnInit {

  @Input() public itemModel: IModal;

  @Output() public formChanged: EventEmitter<IGroupPanelItem> = new EventEmitter();

  public myFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

// needs fixing
  public ngOnInit(): void {
    const summaryDef = {};
    this.itemModel.items[0].summary.forEach((field) => {
      summaryDef[field.name] = field.title;
    });

    const fieldDef = {};
    this.itemModel.items[0].fields.forEach((field) => {
      fieldDef[field.name] = `${field.type} - ${field.title}`;
    });

    this.myFormGroup = this.fb.group({
      ...summaryDef,
      ...fieldDef
    });

    this.myFormGroup.valueChanges.subscribe((x) => {
      this.formChanged.emit(x);
    });
  }
}
