import {
  Directive, SkipSelf,
  Optional, Input, OnChanges, SimpleChanges, ChangeDetectorRef
}
  from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DynamicComponentDirective }
  from '@btas/components/dynamic/directives/dynamic-component.directive';
import { Subscription } from 'rxjs/Subscription';

@Directive({
    selector: '[formGroup]:not(btas-dynamic-component)'
})
export class FieldFormGroupDirective implements OnChanges {
  @Input() public formGroup: FormGroup;

  private subscription: Subscription;

  constructor(@SkipSelf() @Optional() private dynamicComponent: DynamicComponentDirective,
              private cdr: ChangeDetectorRef) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (!this.dynamicComponent) { return; }

    if (changes.hasOwnProperty('formGroup')) {
      const fg = <FormGroup> changes['formGroup'].currentValue;
      if (this.subscription) { this.subscription.unsubscribe(); }
      if (fg && this.dynamicComponent.formGroup === fg) {
        const field = this.dynamicComponent.fieldConfig.name;
        const fc = <FormControl> fg.controls[field];

        if (fc) {
          this.subscription = fc.valueChanges.subscribe(
            () => { this.cdr.markForCheck(); }
          );
        }
      }
    }
  }
}
