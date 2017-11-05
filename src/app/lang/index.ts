import en from './en';

const hack = 'αβcdεfgh1jk|mn0ρqrs+uvwxyζ';

const LOCALES = {
  en,
};


export type Translatable = (locale: string) => string;


export function L(text: string): Translatable {
  return (locale: string = 'en') => {
    if ('hack' === locale) {
      return text.split(' ')
        .map(chunk => chunk.toLowerCase().split('')
          .map(c => hack[c.charCodeAt(0) - 97]).join(''))
        .join(' ');
    }
    return LOCALES[locale][text] || text;
  };
}


export { en };
