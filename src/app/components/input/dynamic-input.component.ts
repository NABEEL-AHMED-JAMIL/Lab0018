import { Component, ChangeDetectionStrategy } from '@angular/core';

import { BaseDynamicComponent } from '@btas/components/dynamic/base-dynamic.component';


@Component({
  selector: 'btas-dynamic-input',
  templateUrl: 'dynamic-input.component.pug',
  styleUrls: ['./dynamic-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicInputComponent extends BaseDynamicComponent {
}
