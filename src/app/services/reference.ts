import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '@btas/reducers';
import { IValueOption } from '@btas/common/value-option';
import { L } from '@btas/lang';


type DynamicOptions<T> = {
  options: Array<IValueOption<T>>,
  separator: IValueOption<string>
};


@Injectable()
export class ReferenceService {
  /* tslint:disable:no-unused-variable */

  constructor(
    private store: Store<fromRoot.State>
  ) {}

  public resolve(id: string): Array<IValueOption<any>> {
    let state;
    this.store.take(1).subscribe(s => state = s);

    const groups = id.split('+')
      .map(selector => this[`get${selector.trim().split('$.')[1]}`](state));

    if (1 === groups.length) {
      return groups[0].options;
    }

    return groups.reduce(
      (prev, curr) => [...prev, curr.separator, ...curr.options],
      []
    );
  }

  private getClientOptions(state): DynamicOptions<string> {
    const { main, secondary } = state.client;
    const options: Array<IValueOption<string>> = [{
      title: `${main.keyInfo.givenName} ${main.keyInfo.surname}`,
      value: `${main.keyInfo.customerKey}`
    }];

    if (secondary) {
      options.push({
        title: `${secondary.keyInfo.givenName} ${secondary.keyInfo.surname}`,
        value: `${secondary.keyInfo.customerKey}`
      });
      options.push({
        title: 'Joint',
        value: `${main.keyInfo.customerKey}+${secondary.keyInfo.customerKey}`
      });
    }

    return {
      options,
      separator: {
        title: L('Clients'),
        value: 'SEPARATOR'
      }
    };
  }

  private getIndividualClientOptions(state): DynamicOptions<string> {
    const options: Array<IValueOption<string>> = [{
      title: 'Individual Client',
      value: 'individualclient'
    }];

    return {
      options,
      separator: {
        title: 'Client',
        value: 'SEPARATOR'
      }
    };
  }

  private getSuperFundsOptions(state): DynamicOptions<string> {
    const options: Array<IValueOption<string>> = [{
      title: 'Super Funds',
      value: 'superfunds'
    }];

    return {
      options,
      separator: {
        title: 'Super Funds',
        value: 'SEPARATOR'
      }
    };
  }

  private getSMSFOptions(state): DynamicOptions<string> {
    const options: Array<IValueOption<string>> = [{
      title: 'SMSF',
      value: 'smsf'
    }];

    return {
      options,
      separator: {
        title: 'SMSF',
        value: 'SEPARATOR'
      }
    };
  }

  private getIndividualCustomerOptions(state): DynamicOptions<string> {
    const options: Array<IValueOption<string>> = [{
      title: 'Individual Customer',
      value: 'individualcustomer'
    }];

    options.push({
      title: 'Joint',
      value: 'joint'
    });

    return {
      options,
      separator: {
        title: 'CUSTOMER',
        value: 'SEPARATOR'
      }
    };
  }

}
