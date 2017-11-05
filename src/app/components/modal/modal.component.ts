import { Component, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { IModal } from './modal';
import { IGroupPanelItem } from '@btas/components/group-panel/group-panel-item';
import { ModalDirective, ModalOptions } from 'ngx-bootstrap/modal';


/**
 * Modal Component
 * @param model model to which this modal is bind to
 *
 */
@Component({
    selector: 'btas-modal',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './modal.component.pug'
})
export class ModalComponent {

  @Input()
  public model: IModal;

  @Input()
  public disable: boolean = false;

  @ViewChild('childModal')
  public childModal: ModalDirective;

  @Input()
  public modalConfig: ModalOptions; // = {backdrop: false};

  public showChildModal(): void {
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }

  public onItemChanged(formValue: IGroupPanelItem): void {
    console.log(formValue);
  }
}
