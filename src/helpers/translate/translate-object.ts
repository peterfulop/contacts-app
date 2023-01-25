import { Text } from './translate.schema';

export const TEXT: Text = {
  pages: {
    contacts: {
      labels: {
        title: { ENG: 'contacts' },
        noContacts: { ENG: 'there are no contacts yet...' },
      },
    },
    notFound: {
      labels: {
        title: { ENG: 'Page Not Found!' },
        content: { ENG: 'Return to the contacts page:' },
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
        missingSignatures: { ENG: 'Missing signatures to mutation!' },
        serverSideErrors: {
          MISSING_RECORD: {
            ENG: 'The contact does not exist in the database!',
          },
          SERVER_ERROR: { ENG: 'Internal server error!' },
          MISSING_INPUTS: { ENG: 'All fields are required!' },
          INVALID_EMAIL_ADDRESS: { ENG: 'Email address is invalid!' },
          UNIQUE_CONSTRAINT_FAIL: {
            ENG: 'Value already in use:\t',
          },
          ERROR_ON_UPDATE_IMAGE: { ENG: 'Error on update image!' },
        },
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
    loading: { ENG: 'loading...' },
    fetchingData: { ENG: 'fetching data...' },
    serverError: { ENG: 'Server Error. Something went wrong! :( ' },
  },
};
