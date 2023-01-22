export enum Languages {
  ENG = 'ENG',
}
export type Content = Record<Languages, string>;
export type Text = {
  pages: {
    contacts: {
      labels: {
        title: Content;
        noContacts: Content;
      };
    };
  };
  buttons: {
    addNew: Content;
    edit: Content;
    favourite: Content;
    remove: Content;
    changePicture: Content;
    done: Content;
    cancel: Content;
  };
  inputFields: {
    name: Content;
    phoneNumber: Content;
    emailAddress: Content;
  };
};

export const TEXT: Text = {
  pages: {
    contacts: {
      labels: {
        title: { ENG: 'contacts' },
        noContacts: { ENG: 'there are no contacts yet...' },
      },
    },
  },
  buttons: {
    addNew: { ENG: 'add new' },
    edit: { ENG: 'edit' },
    favourite: { ENG: 'favourite' },
    remove: { ENG: 'remove' },
    done: { ENG: 'done' },
    cancel: { ENG: 'cancel' },
    changePicture: { ENG: 'change picture' },
  },
  inputFields: {
    name: { ENG: 'name' },
    phoneNumber: { ENG: 'phone number' },
    emailAddress: { ENG: 'email address' },
  },
};

export const t = (text: Content, lang?: Languages) => {
  return text[lang ? lang : Languages.ENG];
};
