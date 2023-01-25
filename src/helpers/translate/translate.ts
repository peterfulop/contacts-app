import { Content, Languages } from './translate.schema';

export const translate = (text: Content, lang?: Languages) => {
  return text[lang ? lang : Languages.ENG];
};
