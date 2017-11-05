import { BaseDynamicComponent } from '@btas/components/dynamic/base-dynamic.component';
import { ChangeDetectionStrategy, Component, ViewChild, OnDestroy } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { ModelDataService } from '@btas/services/model-data';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'btas-modal-field',
  templateUrl: './modal-field.component.pug',
  styleUrls: ['./modal-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalFieldComponent extends BaseDynamicComponent implements OnDestroy {
  public isModalShown: boolean;

  @ViewChild(ModalDirective)
  public modal: ModalDirective;

  public model: any;

  private sub: Subscription;

  constructor(private dataService: ModelDataService<any>) {
    super();
  }

  public ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  public showModal() {
    this.sub = this.dataService.getModel().subscribe(m => {
      this.model = m;
      this.isModalShown = true;
    });
  }

  public onHidden() {
    this.isModalShown = false;
    this.sub.unsubscribe();
    this.sub = null;
  }

  public hideModal() {
    this.modal.hide();
  }

  public onDataChanged(formValues: {[key: string]: any}, hideModal?: boolean) {
    // patch whatever values that may exist in the outer formgroup
    if (formValues) {
      this.formGroup.patchValue(formValues);
    }

    if (!this.supressChangeEvent) {
      this.updateModel.emit(formValues);
    }

    if (hideModal) { this.hideModal(); }

  }
}

