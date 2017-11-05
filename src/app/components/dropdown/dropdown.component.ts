import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IDropdown } from './dropdown';
import { IValueOption } from '@btas/common/value-option';


/**
 * [Usage Dropdown Component]
 * @param [dropdownModel] Pass an Object of Dropdown
 * @event [select] Event which returns the selected item
 * @function [handleSelectedItem($event)] $event contains the current selected item value
 *
 * btas-dropdown(
 * "[dropdownModel]"="dropdownModel"
 * "(select)"="handleSelectedItem($event)"
 * "[disable]"="true"
 * )
 *
 */
@Component({
  selector: 'btas-dropdown',
  templateUrl: './dropdown.component.pug',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent<T> {

  @Input() public dropdownModel: IDropdown<T>;
  @Input() public selectedItem: IValueOption<T> = { title: 'Please Select', value: null};
  @Input() public disable: boolean = false;
  @Output() public select: EventEmitter<T> = new EventEmitter();

  public itemClick(ev: any , item: IValueOption<T>): void {
    ev.preventDefault();
    ev.stopPropagation();

    this.selectedItem = this.dropdownModel.items.find((x) => x.value === item.value);
    this.select.emit(this.selectedItem.value);
  }
}
