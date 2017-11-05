
export interface IPanelContentSection {
  title: string;
  fields: [{title: string, value: any}];
}

export interface IPanelContent {
  sections: IPanelContentSection[];
}
