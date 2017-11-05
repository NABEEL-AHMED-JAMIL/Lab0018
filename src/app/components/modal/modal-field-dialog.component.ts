import {
  Component, ChangeDetectionStrategy, Input,
  ViewChild, OnChanges, SimpleChanges, Output, EventEmitter
} from '@angular/core';
import { GroupPanelItemComponent } from '@btas/components/group-panel/group-panel-item.component';
import { IModalFieldOption, ButtonType, Button, DEFAULT_BUTTON_STYLE,
  SAVE_COMMAND, CANCEL_COMMAND, APPLY_COMMAND, DIALOG_COMMAND } from '@btas/components/modal/modal';
import { ModalDirective } from 'ngx-bootstrap';

export const SAVE_BUTTON = <Button> {
  text: 'Save',
  command: SAVE_COMMAND,
  styleClass: 'btn-sm btn-success'
};

export const APPLY_BUTTON = <Button> {
  text: 'Apply',
  command: APPLY_COMMAND,
  styleClass: 'btn-sm btn-success'
};

export const CANCEL_BUTTON = <Button> {
  text: 'Cancel',
  command: CANCEL_COMMAND,
  styleClass: 'btn-sm btn-info'
};

const STOCK_BUTTONS = [ SAVE_BUTTON, APPLY_BUTTON, CANCEL_BUTTON];
const DEFAULT_BUTTONS = [ SAVE_BUTTON ];

@Component({
  selector: 'btas-modal-field-dialog',
  templateUrl: './modal-field-dialog.component.pug',
  styleUrls: [ './modal-field-dialog.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalFieldDialogComponent implements OnChanges {
  private static createButtonConfig(commands: ButtonType[]): Button[] {
    return commands.map((command) => {
      if (typeof(command) === 'string') {
        return STOCK_BUTTONS.find(b => b.command === command);
      } else {
        const button = <Button> command;
        return <Button> {
          text: button.text,
          command: button.command,
          styleClass: button.styleClass || DEFAULT_BUTTON_STYLE,
          dialog: button.dialog
        };
      }
    });
  }

  @ViewChild(GroupPanelItemComponent)
  public panelItem: GroupPanelItemComponent;

  @ViewChild(ModalDirective)
  public childDialog: ModalDirective;

  @Input()
  public model: any;

  @Input()
  public option: IModalFieldOption;

  /**
   * Emitted when this dialog is closed out right. Payload is the form data value.
   */
  @Output()
  public dismiss = new EventEmitter<any>();

  /**
   * Emitted when data has changed and need to be applied immediately without closing
   * the dialog. This is used especially in the case where child dialog are dismissed
   * and form data needs to be saved without dismissing this dialog.
   */
  @Output()
  public applyChanges = new EventEmitter<any>();

  public buttons: Button[] = DEFAULT_BUTTONS;

  public isChildShown: boolean;

  public childModalOption: IModalFieldOption;

  public isDirty: boolean;

  public ngOnChanges(changes: SimpleChanges): void {
    const option = changes['option'];
    if (option) {
      const modalOption = <IModalFieldOption> option.currentValue;
      if (modalOption.buttons) {
        this.buttons = ModalFieldDialogComponent.createButtonConfig(modalOption.buttons);
      } else {
        this.buttons = DEFAULT_BUTTONS;
      }
    }
  }

  public onClick(evt: UIEvent, button: Button): void {
    evt.preventDefault();
    switch (button.command) {
      case SAVE_COMMAND:
        this.dismiss.emit(this.panelItem.myFormGroup.value);
        break;
      case CANCEL_COMMAND:
        this.dismiss.emit();
        break;
      case APPLY_COMMAND:
        // applies current changes without closing the dialog
        this.applyChanges.emit(this.panelItem.myFormGroup.value);
        break;
      case DIALOG_COMMAND:
        this.childModalOption = button.dialog;
        this.isChildShown = true;
      default:
        throw `Command ${button.command} not implemented`;
    }
  }

  public onHideChild() {
    this.isChildShown = false;
  }

  public onDismissChild(formValues: { [key: string]: any}) {
    if (formValues) {
      this.applyChanges.emit(formValues);
    }
    this.childDialog.hide();
  }

  public onApplyChildChanges(formValues: { [key: string]: any}) {
    if (formValues) {
      this.applyChanges.emit(formValues);
    }
  }
}
