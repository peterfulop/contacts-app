/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Contact = {
  __typename?: 'Contact';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type ContactInput = {
  email: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
};

export type ContactPayload = {
  __typename?: 'ContactPayload';
  contact?: Maybe<Contact>;
  userErrors: Array<UserError>;
};

export type ContactsPayload = {
  __typename?: 'ContactsPayload';
  contacts?: Maybe<Array<Contact>>;
  userErrors: Array<UserError>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  contactCreate: ContactPayload;
  contactDelete: ContactPayload;
  contactUpdate: ContactPayload;
};


export type MutationContactCreateArgs = {
  input: ContactInput;
};


export type MutationContactDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationContactUpdateArgs = {
  id: Scalars['ID'];
  input: ContactInput;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  getContact: ContactPayload;
  getContacts: ContactsPayload;
};


export type QueryGetContactArgs = {
  id: Scalars['ID'];
};

export type Subscription = {
  __typename?: 'Subscription';
  _?: Maybe<Scalars['Boolean']>;
};

export type UserError = {
  __typename?: 'UserError';
  message: Scalars['String'];
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
};
