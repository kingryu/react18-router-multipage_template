import { language as enLanguage } from './en-US/index';
import {
  language as cnLanguage,
  PageType,
  ComType,
} from './zh-CN/index';

interface LangType {
  Com: ComType;
  Page: PageType;
}

let lang: LangType;
let pg: PageType;
let locale: 'zh-CN' | 'en-US' = 'zh-CN';

export function setLan(language: string) {
  if (/^en(-|$)/.test(language)) {
    lang = enLanguage as LangType;
    pg = lang.Page;
    locale = 'en-US';
  } else {
    lang = cnLanguage;
    pg = lang.Page;
    locale = 'zh-CN';
  }
}

function getLocale() {
  return locale;
}

function langTpl(str: string, data: string[] | string) {
  if (typeof data == 'string') {
    data = [data];
  }
  let i = 0;
  return str.replace(/\{(\w+)}/g, (item) => {
    i++;
    return data[i - 1];
  });
}

export { lang, pg, getLocale, langTpl };
