import { Component } from '@angular/core';

import { BaseDynamicComponent } from '@btas/components/dynamic/base-dynamic.component';
import { DynamicComponentDecorator } from '@btas/components/shared';

const groupFn = () => ['addressLine1', 'addressLine2', 'state', 'postcode'];

@Component({
    selector: 'btas-address',
    templateUrl: './dynamic-address.component.pug',
    styleUrls: [
        './dynamic-address.component.scss'
    ]
})
@DynamicComponentDecorator({
  name: 'address',
  groupFn
})
export class DynamicAddressComponent extends BaseDynamicComponent {
}
