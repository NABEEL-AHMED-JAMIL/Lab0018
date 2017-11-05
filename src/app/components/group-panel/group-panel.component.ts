import {
  Component, Input, Output, EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { IGroupPanelItem } from '@btas/components/group-panel/group-panel-item';


@Component({
  selector: 'btas-group-panel',
  templateUrl: './group-panel.component.pug',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [
    './group-panel.component.scss'
  ]
})
export class GroupPanelComponent {

  @Input()
  public itemConfig: IGroupPanelItem;

  @Input()
  public items: Object[];

  @Input()
  public hasAdd: boolean = false;

  @Input()
  public selected: boolean = true;

  @Output()
  public add: EventEmitter<any> = new EventEmitter();

  @Input()
  public hasToggle: boolean = false;

  @Output()
  public toggle: EventEmitter<boolean> = new EventEmitter();

  @Output()
  public contentChange: EventEmitter<Object> = new EventEmitter();

  @Output()
  public deleteItem: EventEmitter<string> = new EventEmitter();

  public get showBottomSeparator(): boolean {
    return !!(this.items && this.items.length);
  }

  public onItemChanged(value): void {
    this.contentChange.emit(value);
  }

  public onAdd(event): void {
    this.add.emit();
  }

  public onDelete(id: string): void {
    this.deleteItem.emit(id);
  }

  public onToggle(event): void {
    this.selected = !this.selected;
    this.toggle.emit(this.selected);
  }

  public trackItem(index: number, item: IGroupPanelItem): any {
    return item && (item.id || item.title) || index;
  }

}
