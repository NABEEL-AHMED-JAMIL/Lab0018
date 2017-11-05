import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LabelPosition } from '@btas/common/configurable-field';


@Component({
  selector: 'btas-input',
  templateUrl: 'input.component.pug',
  styleUrls: ['./input.component.scss']
})
export class InputComponent<T> {

  @Input()
  public title: string;

  @Input()
  public name: string;

  @Input()
  public value: T;

  @Input()
  public labelPosition: LabelPosition | null;

  @Input()
  public labelSpan: number;

  @Input()
  public fieldSpan: number;

  @Input()
  public readonly: boolean;

  @Input()
  public disabled: boolean;

  @Output() public valueChange: EventEmitter<T> = new EventEmitter();

  public addtext() {
    this.valueChange.emit(this.value);
  }
}
