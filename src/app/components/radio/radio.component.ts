import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IRadioItem } from './radio';
import * as uuid from 'uuid/v4';


/**
 * Custom Dynamic Radio Component
 * @param label Text to display against the radio button
 * @param value value to use with the radio button
 * @param name Name of the radio button
 * @param radioItems Number of radio buttons to display
 * @param disable Disable the radio button
 *
 */
@Component({
  selector: 'btas-radio',
  templateUrl: 'radio.component.pug',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent<T> {

  @Input() public label: string;
  @Input() public value: T;
  @Input() public name: any;
  @Input() public radioItems: Array<IRadioItem<T>>;
  @Input() public disable: boolean = false;
  @Input() public textValue: T;
  @Input() public displayInput: boolean = false;
  public uuidString: string = uuid();

  @Output() public valueChange: EventEmitter<T> = new EventEmitter();

  public selectedRadio: any;

  public onChange(): any {
    this.valueChange.emit(this.value);
  }

  public select(val: T) {
    this.value = val;
    this.textValue = null;
  }

  public clearRadio() {
    this.value = null;
  }

  public enteredValue(ev: any) {
    this.value = ev.target.value;
  }
}
