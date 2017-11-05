import { Component, Input } from '@angular/core';
import { IPanel } from './panel';


@Component({
  selector: 'btas-panel',
  templateUrl: './panel.component.pug'
})
export class PanelComponent {
  @Input() public panelModel: IPanel;
}
