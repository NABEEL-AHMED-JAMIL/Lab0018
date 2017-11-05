import { IValueOption } from '@btas/common/value-option';


export const OwnerOptions: Array<IValueOption<string>> | Function = () => {
  const content = sessionStorage.getItem('clientOptions');
  return content ? JSON.parse(content) : [];
};
