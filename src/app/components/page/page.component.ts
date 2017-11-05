import {
  Component, Input,
  Output, EventEmitter,
  OnDestroy
} from '@angular/core';
import { IPage } from './page';


@Component({
  selector: `btas-page`,
  templateUrl: './page.component.pug',
  styleUrls: [
    './page.component.scss'
  ]
})
export class PageComponent implements OnDestroy {

  @Input()
  public pageModel: IPage;

  @Input()
  public showToggleActiveOnly: boolean = false;

  @Output()
  public toggleActiveOnly: EventEmitter<boolean> = new EventEmitter();

  @Output()
  public pageDestroy: EventEmitter<any> = new EventEmitter();

  public onToggleActiveOnly(activeOnly: boolean) {
    this.toggleActiveOnly.emit(activeOnly);
  }

  public ngOnDestroy() {
    this.pageDestroy.emit(null);
  }

}
