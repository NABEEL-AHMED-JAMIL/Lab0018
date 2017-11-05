
import { IPanelContent } from '@btas/components/panel-content/panel-content';

export interface IPanel {
    title: string;
    subtitle?: string;
    content?: IPanelContent;
}
