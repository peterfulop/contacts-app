export enum Languages {
  ENG = 'ENG',
}
export type Content = Record<Languages, string>;
export type Text = {
  pages: {
    contacts: {
      labels: {
        title: Content;
      };
    };
  };
  buttons: {
    addNew: Content;
    edit: Content;
    favourite: Content;
    remove: Content;
  };
};

export const TEXT: Text = {
  pages: {
    contacts: {
      labels: {
        title: { ENG: 'contacts' },
      },
    },
  },
  buttons: {
    addNew: { ENG: 'add new' },
    edit: { ENG: 'edit' },
    favourite: { ENG: 'favourite' },
    remove: { ENG: 'remove' },
  },
};

export const t = (text: Content, lang?: Languages) => {
  return text[lang ? lang : Languages.ENG];
};
