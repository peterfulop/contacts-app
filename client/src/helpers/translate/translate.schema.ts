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
        missingSignatures: Content;
        serverSideErrors: ServerSideErrorObject;
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
    fetchingData: Content;
    loading: Content;
    serverError: Content;
  };
};

export enum ServerSideError {
  MISSING_RECORD = 'MISSING_RECORD',
  SERVER_ERROR = 'SERVER_ERROR',
  MISSING_INPUTS = 'MISSING_INPUTS',
  INVALID_EMAIL_ADDRESS = 'INVALID_EMAIL_ADDRESS',
  UNIQUE_CONSTRAINT_FAIL = 'UNIQUE_CONSTRAINT_FAIL',
  ERROR_ON_UPDATE_IMAGE = 'ERROR_ON_UPDATE_IMAGE',
}

export type ServerSideErrorObject = Record<
  keyof typeof ServerSideError,
  Content
>;
