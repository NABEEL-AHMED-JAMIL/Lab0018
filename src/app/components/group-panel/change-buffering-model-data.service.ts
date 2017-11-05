import { Injectable, EventEmitter } from '@angular/core';
import { ModelDataService } from '@btas/services/model-data';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ChangeBufferingModelDataService extends ModelDataService<any> {

  public flushRequired: EventEmitter<any> = new EventEmitter();

  private $model: Observable<any>;
  private $modelSubject: Subject<any> = new Subject();

  private uncommittedChanges: any;

  private currentModel: any;

  constructor() {
    super();
    this.$model = new Observable((subscriber: Subscriber<any>) => {
      if (!this.uncommittedChanges) {
        subscriber.next(this.currentModel);
      }
    });
    this.$modelSubject.subscribe(m => { this.currentModel = m; });
  }

  public setUncommittedChanges(m: any) {
    this.uncommittedChanges = m;
  }

  public getUncommittedChanges(): any {
    return this.uncommittedChanges;
  }

  public isDirty(): boolean {
    return !!this.uncommittedChanges;
  }

  public publishModel(m: any) {
    this.uncommittedChanges = null;
    this.$modelSubject.next(m);
  }

  public getModel(): Observable<any> {
    if (this.uncommittedChanges) {
      this.flushRequired.emit(this.uncommittedChanges);
      return this.$modelSubject;
    } else {
      return this.$model.merge(this.$modelSubject);
    }
  }
}
