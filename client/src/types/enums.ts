export enum ButtonVariant {
  FLAT = 'FLAT',
  BORDERED = 'BORDERED',
}

export enum Theme {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

export enum InputState {
  DEFAULT = 'DEFAULT',
  ACTIVE = 'ACTIVE',
  HOVER = 'HOVER',
}

export enum ContactFormAction {
  UPDATE = 'update',
  ADD = 'add',
  DELETE = 'delete',
}

export enum MyRoutes {
  HOME = '/',
  CONTACTS = '/contacts',
  DETAILS = '/contacts/:contactId',
  NOT_FOUND = '*',
}

export enum DBErrorMessages {
  MISSING_FIELDS = 'MISSING_FIELDS',
  MISSING_RECORD = 'MISSING_RECORD',
  SERVER_ERROR = 'SERVER_ERROR',
  MISSING_INPUTS = 'MISSING_INPUTS',
  INVALID_EMAIL_ADDRESS = 'INVALID_EMAIL_ADDRESS',
  UNIQUE_CONSTRAINT_FAIL = 'UNIQUE_CONSTRAINT_FAIL',
  ERROR_ON_CREATE = 'ERROR_ON_CREATE',
}
