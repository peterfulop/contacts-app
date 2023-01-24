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
  forms: {
    contactForms: {
      add: {
        title: Content;
      };
      update: {
        title: Content;
      };
      delete: {
        title: Content;
        labels: {
          confirmDelete: Content;
        };
      };
      inputFields: {
        name: {
          label: Content;
          placeholder: Content;
        };
        phone: {
          label: Content;
          placeholder: Content;
        };
        email: {
          label: Content;
          placeholder: Content;
        };
      };
      errors: {
        allFieldsRequired: Content;
      };
    };
  };
  buttons: {
    addNew: Content;
    addPicture: Content;
    edit: Content;
    favourite: Content;
    remove: Content;
    changePicture: Content;
    done: Content;
    cancel: Content;
  };
  general: {
    loading: Content;
    serverError: Content;
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
  forms: {
    contactForms: {
      add: {
        title: { ENG: 'Add contact' },
      },
      update: {
        title: { ENG: 'Edit contact' },
      },
      delete: {
        title: { ENG: 'Delete contact' },
        labels: {
          confirmDelete: {
            ENG: 'Dou you really want to delete the selected contact?',
          },
        },
      },
      inputFields: {
        name: {
          label: { ENG: 'Name' },
          placeholder: { ENG: 'Jamie Wright' },
        },
        phone: {
          label: { ENG: 'Phone number' },
          placeholder: { ENG: '+01 234 5678' },
        },
        email: {
          label: { ENG: 'Email address' },
          placeholder: { ENG: 'jamie.wright@email.com' },
        },
      },
      errors: {
        allFieldsRequired: { ENG: 'All fields are required!' },
      },
    },
  },
  buttons: {
    addNew: { ENG: 'add new' },
    addPicture: { ENG: 'add picture' },
    edit: { ENG: 'edit' },
    favourite: { ENG: 'favourite' },
    remove: { ENG: 'remove' },
    done: { ENG: 'done' },
    cancel: { ENG: 'cancel' },
    changePicture: { ENG: 'change picture' },
  },
  general: {
    loading: { ENG: 'fetching data...' },
    serverError: { ENG: 'Server Error. Something went wrong! :( ' },
  },
};

export const t = (text: Content, lang?: Languages) => {
  return text[lang ? lang : Languages.ENG];
};
