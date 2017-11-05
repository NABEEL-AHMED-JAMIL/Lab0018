import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  ButtonsModule,
  CollapseModule,
  ModalModule
} from 'ngx-bootstrap';

import {
  BsDropdownModule
} from 'ngx-bootstrap/dropdown';

import { NgxMyDatePickerModule } from 'ngx-mydatepicker';

import { NavComponent } from './nav/nav.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MasterViewComponent } from './master-view/master-view.component';
import { PanelComponent } from './panel/panel.component';
import { PageComponent } from './page/page.component';
import { PanelContentComponent } from './panel-content/panel-content.component';
import { GroupPanelComponent } from './group-panel/group-panel.component';
import { GroupPanelItemComponent } from './group-panel/group-panel-item.component';
import { InputComponent } from './input/input.component';
import { DynamicInputComponent } from './input/dynamic-input.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { DynamicTextAreaComponent } from './textarea/dynamic-textarea.component';
import { ModalComponent } from './modal/modal.component';
import { ModalBodyComponent } from './modal/modal-body.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RadioComponent } from './radio/radio.component';
import { DynamicAddressComponent } from './address/dynamic-address.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MultiselectCheckboxComponent } from './checkbox/multiselect-checkbox.component';
import { DynamicCheckboxComponent } from './checkbox/dynamic-checkbox.component';
import { DynamicDropdownComponent } from './dropdown/dynamic-dropdown.component';
import { DynamicDateComponent } from './date/dynamic-date.component';

import { DynamicComponentService } from '@btas/services/dynamic-component';
import { DynamicRadioComponent } from './radio/dynamic-radio.component';
import { DynamicCurrencyComponent } from './currency/dynamic-currency.component';

import { LoadingComponent } from './loading/loading.component';
import { LoadingService } from './loading/loading.service';

import { SafeAccessPipe } from './pipes/safe-access.pipe';
import { I18NPipe, I18NStaticPipe } from './pipes/i18n.pipe';
import { CurrencySymbolPipe } from '@btas/components/pipes/currency-symbol.pipe';
import { FieldFormGroupDirective }
  from '@btas/components/dynamic/directives/field-formGroup.directive';
import { DynamicComponentDirective }
  from '@btas/components/dynamic/directives/dynamic-component.directive';
import { ModalFieldComponent } from '@btas/components/modal/modal-field.component';
import { ModalFieldDialogComponent } from '@btas/components/modal/modal-field-dialog.component';
import { TabularFieldComponent } from '@btas/components/tabular/tabular-field-component';
import { ReferenceService } from '@btas/services/reference';
import { TitleValuePipe } from '@btas/components/pipes/title-value.pipe';


const modules = [
  NavComponent,
  BreadcrumbComponent,
  MasterViewComponent,
  PageComponent,
  PanelComponent,
  PanelContentComponent,
  GroupPanelComponent,
  GroupPanelItemComponent,
  InputComponent,
  DynamicInputComponent,
  DynamicComponent,
  DynamicTextAreaComponent,
  ModalComponent,
  ModalBodyComponent,
  DynamicAddressComponent,
  DynamicDateComponent,
  DropdownComponent,
  CheckboxComponent,
  RadioComponent,
  DynamicCheckboxComponent,
  DynamicDropdownComponent,
  DynamicAddressComponent,
  DynamicRadioComponent,
  MultiselectCheckboxComponent,
  DynamicCurrencyComponent,
  SafeAccessPipe,
  I18NPipe,
  I18NStaticPipe,
  CurrencySymbolPipe,
  LoadingComponent,
  FieldFormGroupDirective,
  DynamicComponentDirective,
  ModalFieldComponent,
  ModalFieldDialogComponent,
  TabularFieldComponent,
  TitleValuePipe
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ButtonsModule,
    CollapseModule,
    ModalModule.forRoot(),
    NgxMyDatePickerModule,
    BsDropdownModule.forRoot()
  ],
  entryComponents: [
    DynamicInputComponent,
    DynamicTextAreaComponent,
    DynamicCheckboxComponent,
    DynamicAddressComponent,
    DynamicDateComponent,
    DynamicDropdownComponent,
    DynamicRadioComponent,
    MultiselectCheckboxComponent,
    DynamicCurrencyComponent,
    ModalFieldComponent,
    ModalFieldDialogComponent,
    TabularFieldComponent
  ],
  providers: [
    DynamicComponentService,
    LoadingService,
    ReferenceService,
  ],
  declarations: modules,
  exports: modules
})
export class ComponentsModule {}
