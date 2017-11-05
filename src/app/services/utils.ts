import { IDataModel } from '@btas/models/base';


export function stamp(model: IDataModel): IDataModel {
  return {
    ...model,
    timestamp: new Date().getTime()
  };
}


export function getUrl(domain: string, version: number = 1): string {
  return `https://snapshot.dae.rubik.cloud/services/api/dstore/v${version}/${domain}`;
}
