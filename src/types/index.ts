export type Contact = {
  name: string;
  phone: string;
  avatar: string;
};

export enum ButtonVariant {
  FLAT = 'FLAT',
  BORDERED = 'BORDERED',
}

export enum Theme {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

export enum ButtonState {
  DEFAULT = 'DEFAULT',
  ACTIVE = 'ACTIVE',
  HOVER = 'HOVER',
}