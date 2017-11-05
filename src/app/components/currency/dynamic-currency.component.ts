import {
  Component, OnInit, HostListener,
  ViewChild, ElementRef, ChangeDetectionStrategy
} from '@angular/core';

import { BaseDynamicComponent } from '@btas/components/dynamic/base-dynamic.component';
import { ICurrencyCode } from '@btas/common/currency';
import { ICurrencyFieldOption } from './currency-field-option';
import { CurrencyCodesService } from '@btas/services/currency-codes';
import { BsDropdownToggleDirective, BsDropdownDirective } from 'ngx-bootstrap/dropdown';

/**
 * [Usage Currency Component]
 * @param [value] Pass an Object of Dropdown
 * @event [select] Event which returns the selected item
 * @function [handleSelectedItem($event)] $event contains the current selected item value
 *
 * btas-dropdown(
 * "[value]"="dropdownModel"
 * "(select)"="handleSelectedItem($event)"
 * "[disable]"="true"
 * )
 *
 */
@Component({
  selector: 'btas-dynamic-currency',
  templateUrl: './dynamic-currency.component.pug',
  styleUrls: ['./dynamic-currency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicCurrencyComponent extends BaseDynamicComponent implements OnInit {
  public currencyCodes: ICurrencyCode[];
  public _isDropup = false;

  @ViewChild('dropupdown') public dropdownMenu: ElementRef;

  @ViewChild(BsDropdownToggleDirective, {read: ElementRef}) public dropdownAnchor: ElementRef;
  @ViewChild(BsDropdownDirective) public bsDropdown: BsDropdownDirective;

  private _topN: number;

  constructor(
    private currencyService: CurrencyCodesService
  ) {
    super();
    this._topN = currencyService.getTopN();
  }

  public ngOnInit(): void {
    const config = this.fieldConfig as ICurrencyFieldOption;
    this.currencyCodes = this.currencyService.getCurrencyCodes(config.topN);
  }

  public get topN() {
    return (this.fieldConfig as ICurrencyFieldOption).topN || this._topN;
  }

  public itemClick(ev: any , item: ICurrencyCode): void {
    ev.preventDefault();

    this.fieldValue = {
        ... this.fieldValue,
        code: item.code
    };
  }

  public onAmountChanged(value: string): void {
    this.fieldValue = {
      ... this.fieldValue,
      value: parseFloat(value)
    };

    if (!this.fieldValue.code) {
      this.fieldValue.code = this.currencyService.getDefaultCurrency();
    }
  }

  public get isDropup(): boolean {
    this.positionDropup();
    return this._isDropup;
  }

  public get isOpen(): boolean {
    return this.bsDropdown && this.bsDropdown.isOpen;
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  public onShowMenu(): void {
    this.positionDropup();
  }

  protected positionDropup(): void {
    if (!this.dropdownMenu || !this.dropdownAnchor || !this.bsDropdown) { return; }
    if (!this.isOpen) { return; }
    const e = <Element> this.dropdownMenu.nativeElement;
    const anchor = <Element> this.dropdownAnchor.nativeElement;
    const elRect = e.getBoundingClientRect();
    const anchorRect = anchor.getBoundingClientRect();
    const spaceUp = anchorRect.top;
    const spaceDown = window.innerHeight - anchorRect.bottom;

    if (spaceDown > elRect.height) {
      this._isDropup = false;
    } else if (spaceUp > spaceDown) {
      this._isDropup = true;
    }
  }
}
