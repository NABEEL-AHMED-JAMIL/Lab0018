import {
  Component, Input, Output, EventEmitter,
  ViewContainerRef, ComponentRef,
  ComponentFactoryResolver,
  ViewChild, OnDestroy
} from '@angular/core';

import { IConfigurableField } from '@btas/common/configurable-field';
import { DynamicComponentService } from '@btas/services/dynamic-component';
import { FormGroup } from '@angular/forms';
import { BaseDynamicComponent } from '@btas/components/dynamic/base-dynamic.component';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'btas-dynamic-component',
  templateUrl: './dynamic.component.pug'
})
export class DynamicComponent implements OnDestroy {
  public component: ComponentRef<any>;

  @ViewChild('container', { read: ViewContainerRef })
  public container: ViewContainerRef;

  @Input()
  public formGroup: FormGroup;

  @Input()
  public set fieldConfig(fieldConfig: IConfigurableField<any>) {
    if (!fieldConfig) { return; }
    this.cleanupSubscriptions();

    const componentData = this.service.getComponentData(fieldConfig);
    // create component factory
    const cmpFactory = this.resolver.resolveComponentFactory(
      componentData.component);

    // plug it in
    this.component = this.container.createComponent<any>(cmpFactory);
    const instance = <BaseDynamicComponent> this.component.instance;
    instance.fieldConfig = componentData.inputs;
    instance.formGroup = this.formGroup;

    this.subscription = instance.valueChange.subscribe((x) => {
      this.valueChange.emit(x);
    });

    this.updateSubscription = instance.updateModel.subscribe(x => {
      this.updateModel.emit(x);
    });
  }

  @Output()
  public valueChange: EventEmitter<any> = new EventEmitter();

  @Output()
  public updateModel: EventEmitter<any> = new EventEmitter();

  private subscription: Subscription;
  private updateSubscription: Subscription;

  constructor(
    private resolver: ComponentFactoryResolver,
    private service: DynamicComponentService
  ) {
  }

  public ngOnDestroy() {
    this.cleanupSubscriptions();
  }

  protected cleanupSubscriptions() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
      this.updateSubscription = null;
    }
  }

}
