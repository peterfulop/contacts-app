export enum Languages {
  ENG = 'ENG',
  HU = 'HU',
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
  };
};

export const TEXT: Text = {
  pages: {
    contacts: {
      labels: {
        title: { ENG: 'contacts', HU: 'kapcsolatok' },
      },
    },
  },
  buttons: {
    addNew: { ENG: 'add new', HU: 'új hozzáadása' },
  },
};

export const t = (text: Content, lang?: Languages) => {
  return text[lang ? lang : Languages.ENG];
};
