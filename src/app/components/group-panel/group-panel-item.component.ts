import {
  Component, Input, Output, OnInit, EventEmitter, AfterViewInit, OnChanges,
  SimpleChanges, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import {
  trigger, state, animate, style, transition
} from '@angular/animations';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IDataModel } from '@btas/models/base';
import { IConfigurableField } from '@btas/common/configurable-field';
import { createGroupPanelFormGroup } from '@btas/components/shared';

import * as jexl from 'jexl';

import { IGroupPanelItem } from './group-panel-item';

import { ModelDataService } from '@btas/services/model-data';
import { Subscription } from 'rxjs/Subscription';
import { ChangeBufferingModelDataService }
  from '@btas/components/group-panel/change-buffering-model-data.service';


@Component({
  selector: 'btas-group-panel-item',
  templateUrl: './group-panel-item.component.pug',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [
    './group-panel-item.component.scss'
  ],
  providers: [ ChangeBufferingModelDataService,
    { provide: ModelDataService, useExisting: ChangeBufferingModelDataService} ],
  animations: [
    trigger('hideField', [
      state('1', style({ display: 'none', height: 0, opacity: 0, overflow: 'hidden' })),
      state('0', style({ display: 'block', opacity: 1 })),

      transition('0 => 1', [
        animate(
          '0ms ease-out',
          style({
            overflow: 'hidden',
          })
        ),
        animate(
          '100ms ease-out',
          style({
            height: 0, opacity: 0,
            marginBottom: 0
          })
        )
      ]),

      transition('1 => 0', [
        animate(
          '100ms ease-in',
          style({
            height: '*',
            opacity: 1,
          })
        )
      ]),
   ]),
  ]
})
export class GroupPanelItemComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  @Output()
  public formChanged: EventEmitter<any> = new EventEmitter();

  @Input()
  public itemConfig: IGroupPanelItem;

  @Input()
  public itemModel: IDataModel;

  @Input()
  public collapsible: boolean;

  @Output()
  public deleteItem: EventEmitter<any> = new EventEmitter();

  public myFormGroup: FormGroup;

  public collapsed: boolean = false;

  public fieldHidden: Map<string, boolean> = new Map();

  public isDirty: boolean;

  private flushSub: Subscription;

  constructor(
    private fb: FormBuilder,
    private modelService: ChangeBufferingModelDataService,
    private cdr: ChangeDetectorRef
  ) {
  }

  public ngOnInit(): void {
    if (!this.myFormGroup && this.itemConfig) {
      this.myFormGroup = createGroupPanelFormGroup(
        this.fb, this.itemConfig, this.itemModel
      );
    }

    this.flushSub = this.modelService.flushRequired.subscribe(x => {
      this.formChanged.emit(x);
    });
  }

  public ngOnDestroy(): void {
    const changes = this.modelService.getUncommittedChanges();
    if (changes) {
      this.formChanged.emit(changes);
    }
    this.flushSub.unsubscribe();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('itemConfig')) {
      this.myFormGroup = createGroupPanelFormGroup(
        this.fb, changes['itemConfig'].currentValue, this.itemModel
      );
    }

    if (changes.hasOwnProperty('itemModel') && this.myFormGroup) {
      const model = changes['itemModel'].currentValue;
      if (model) {
        this.myFormGroup.patchValue(model, { emitEvent: false});
      } else {
        this.myFormGroup.reset();
      }

      this.modelService.publishModel(model);
      this.updateHiddenFields();
    }
  }

  public get hasButtons(): boolean {
    return this.itemConfig.deletable;
  }

  public ngAfterViewInit() {
    // FIX: need proper clean up if formGroup does get recreated in ngOnChanges
    this.myFormGroup.valueChanges
      .do(x => {
        this.modelService.setUncommittedChanges(x);
        this.updateHiddenFields();
      })
      .debounceTime(3000).subscribe((x) => {
        if (this.modelService.isDirty()) {
          this.formChanged.emit(x);
        }
      });

    this.updateHiddenFields();
  }

  public updateHiddenFields(): void {
      const cxt = this.myFormGroup.value;
      this.itemConfig.fields
        .filter((e) => e.hideWhen)
        .reduce((p, e) =>
           p.then(() => jexl.eval(e.hideWhen, cxt)
             .then((res) => {
               this.fieldHidden.set(e.name, res);
             })),
           Promise.resolve()
        ).then(
          (x) => {
            this.cdr.detectChanges();
          }
        );
  }

  public onFieldValueChanged(fieldConfig, value) {
  }

  /**
   * Immediately updates the model without debounce/etc
   * this is mainly to deal with components that wants to bypass usage of the provided formgroup
   * and directly manipulate the model
   *
   * Currently this does NOT merge the formValues with values that exist within myFormGroup.
   * The reducer would need to be smart enough to merge accordingly. Perhaps a flag to turn merging
   * on/off would be useful.
   */
  public onUpdateModel(formValues: any) {
    this.formChanged.emit(formValues);
  }

  public onDeleteItem(): void {
    this.deleteItem.emit();
  }

  public trackField(index: number, field: IConfigurableField<any>): any {
    return (field && field.name) || index;
  }
}
