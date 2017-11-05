import { Component, Input } from '@angular/core';

import { IPanelContent } from './panel-content';

@Component({
  selector: 'btas-panel-content',
  templateUrl: 'panel-content.component.pug'
})
export class PanelContentComponent {
  @Input() public contentModel: IPanelContent;

  public get singleMode(): boolean {
    return !!this.contentModel && 1 === this.contentModel.sections.length;
  }

  public get multiMode(): boolean {
    return !!this.contentModel && 1 < this.contentModel.sections.length;
  }

}
