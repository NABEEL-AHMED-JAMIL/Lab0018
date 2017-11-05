/* tslint:disable:no-unused-variable */

import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { FormGroup, FormBuilder } from '@angular/forms';

import * as fromRoot from '@btas/reducers';
import * as client from '@btas/actions/client';
import * as playground from '@btas/actions/playground';

import { IPage } from '@btas/components/page/page';
import { IPanel } from '@btas/components/panel/panel';
import {
  IPanelContent, IPanelContentSection
} from '@btas/components/panel-content/panel-content';

import { IConfigurableField } from '@btas/common/configurable-field';
import { IClient } from '@btas/models/client';
import { Observable } from 'rxjs';

import { getClients, getHeroes } from '@btas/reducers';
import { IGroupPanel } from '@btas/components/group-panel/group-panel';
import { IModal } from '@btas/components/modal/modal';
import { IDropdown } from '@btas/components/dropdown/dropdown';
import { IValueOption } from '@btas/common/value-option';
import { RETIREMENT_GOALS } from '@btas/data/goal.reference';
import { IRadioItem } from '@btas/components/radio/radio';

import { ICurrencyCode, CurrencyCodes, Currency } from '@btas/common/currency';

@Component({
  selector: 'btas-playground',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './playground.component.pug'
})
export class PlaygroundComponent implements OnInit {

  public textValue: any;
  public pageModel: IPage;
  public panelModel: IPanel;
  public modalModel: IModal;
  public dropdownModel: IDropdown<string>;

  public radioItems: Array<IRadioItem<string>> = [
    { title: 'Yes', value: 'yes', checked: false },
    { title: 'No', value: 'no', checked: false },
    { title: 'Nothing', value: 'nothing', checked: false }
  ];
  public radioName: any = 'mygroup';
  public radioModel: string = 'other';
  public radioLabel: any = 'radio';

  public clients: Observable<IClient[]>;
  public groupPanelModel: IGroupPanel;

  public frequency: Array<IValueOption<string>> = [
    { title: 'Daily', value: 'daily' },
    { title: 'Weekly', value: 'weekly' },
    { title: 'Monthly', value: 'monthly' },
    { title: 'Quarterly', value: 'quarterly' },
    { title: 'Yearly', value: 'yearly' }
  ];

  public selectedItem: IValueOption<string> = { title: 'Monthly', value: 'monthly' };

  public currencies = CurrencyCodes.map((e) => { return { value: e, label: e.code }; } );

  public currencyFieldConfig: IConfigurableField<Currency>;
  public myFormGroup: FormGroup;

  constructor(private store: Store<fromRoot.State>, private fb: FormBuilder) {
    this.clients = store.select(getClients);
    this.currencyFieldConfig = <IConfigurableField<Currency>> {
      title: 'Currency',
      type: 'currency',
      name: 'currency',
      fieldOptions: CurrencyCodes.map(
        m => <IValueOption<ICurrencyCode>> { title: m.code, value: m }
      )
    };

    this.myFormGroup = fb.group(
      {
        currency: null
      }
    );
  }

  public ngOnInit(): void {
    this.store.dispatch(new client.FetchClientsAction());

    this.pageModel = <IPage> {
      title: 'Personal Details'
    };

    this.clients.subscribe((clients) => {
      const sections = clients.filter(c => c).map((client) => {
        const keyInfo = client.keyInfo;
        return <IPanelContentSection> {
          title: keyInfo.preferredName,
          fields: [
            { title: 'Gender', value: keyInfo.gender },
            { title: 'Date of Birth', value: keyInfo.dateOfBirth }
          ]
        };
      });

      this.panelModel = <IPanel> {
        title: 'Key Info',
        content: <IPanelContent> { sections }
      };

      this.groupPanelModel = <IGroupPanel> {
        title: 'Retirement',
        subtitle: '',
        path: '',
        items: RETIREMENT_GOALS
      };

      this.modalModel = <IModal> {
        title: 'Repay Debts',
        subtitle: 'Instructions Here',
        size: 'lg',
        btntitle: 'Open Modal',
        items: RETIREMENT_GOALS
      };

      this.dropdownModel = <IDropdown<string>> {
        title: 'Please Select',
        items: this.frequency
      };
    });
  }
}
