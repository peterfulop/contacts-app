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
    notFound: {
      labels: {
        title: Content;
        content: Content;
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
