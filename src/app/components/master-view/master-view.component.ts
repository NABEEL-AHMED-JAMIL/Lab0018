import { Component, Input } from '@angular/core';
import { MasterViewItem } from './master-view-item';


@Component({
  selector: 'btas-master-view',
  templateUrl: './master-view-item.pug',
  styleUrls: ['./master-view-item.scss']
})
export class MasterViewComponent {
  @Input() public viewItems: MasterViewItem[];
}
