
import { Observable } from 'rxjs/Observable';

export abstract class ModelDataService<T> {
  public abstract getModel(): Observable<T>;
}
