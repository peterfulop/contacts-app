import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
  email: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
};

export type ContactInput = {
  email: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
};

export type ContactPayload = {
  __typename?: 'ContactPayload';
  contact: Maybe<Contact>;
  userErrors: Array<UserError>;
};

export type ContactUpdateInput = {
  email: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
};

export type ContactsPayload = {
  __typename?: 'ContactsPayload';
  contacts: Maybe<Array<Contact>>;
  userErrors: Array<UserError>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _: Maybe<Scalars['Boolean']>;
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
  input: ContactUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  _: Maybe<Scalars['Boolean']>;
  getContact: ContactPayload;
  getContacts: ContactsPayload;
  getSignature: Maybe<Signatures>;
};


export type QueryGetContactArgs = {
  id: Scalars['ID'];
};

export type Signatures = {
  __typename?: 'Signatures';
  signature: Scalars['String'];
  timestamp: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  _: Maybe<Scalars['Boolean']>;
};

export type UserError = {
  __typename?: 'UserError';
  message: Scalars['String'];
  values: Maybe<Array<Maybe<Scalars['String']>>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Contact: ResolverTypeWrapper<Contact>;
  ContactInput: ContactInput;
  ContactPayload: ResolverTypeWrapper<ContactPayload>;
  ContactUpdateInput: ContactUpdateInput;
  ContactsPayload: ResolverTypeWrapper<ContactsPayload>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Signatures: ResolverTypeWrapper<Signatures>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  UserError: ResolverTypeWrapper<UserError>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Contact: Contact;
  ContactInput: ContactInput;
  ContactPayload: ContactPayload;
  ContactUpdateInput: ContactUpdateInput;
  ContactsPayload: ContactsPayload;
  ID: Scalars['ID'];
  Mutation: {};
  Query: {};
  Signatures: Signatures;
  String: Scalars['String'];
  Subscription: {};
  UserError: UserError;
};

export type ContactResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contact'] = ResolversParentTypes['Contact']> = {
  email: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContactPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactPayload'] = ResolversParentTypes['ContactPayload']> = {
  contact: Resolver<Maybe<ResolversTypes['Contact']>, ParentType, ContextType>;
  userErrors: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContactsPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactsPayload'] = ResolversParentTypes['ContactsPayload']> = {
  contacts: Resolver<Maybe<Array<ResolversTypes['Contact']>>, ParentType, ContextType>;
  userErrors: Resolver<Array<ResolversTypes['UserError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  contactCreate: Resolver<ResolversTypes['ContactPayload'], ParentType, ContextType, RequireFields<MutationContactCreateArgs, 'input'>>;
  contactDelete: Resolver<ResolversTypes['ContactPayload'], ParentType, ContextType, RequireFields<MutationContactDeleteArgs, 'id'>>;
  contactUpdate: Resolver<ResolversTypes['ContactPayload'], ParentType, ContextType, RequireFields<MutationContactUpdateArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  getContact: Resolver<ResolversTypes['ContactPayload'], ParentType, ContextType, RequireFields<QueryGetContactArgs, 'id'>>;
  getContacts: Resolver<ResolversTypes['ContactsPayload'], ParentType, ContextType>;
  getSignature: Resolver<Maybe<ResolversTypes['Signatures']>, ParentType, ContextType>;
};

export type SignaturesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Signatures'] = ResolversParentTypes['Signatures']> = {
  signature: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  _: SubscriptionResolver<Maybe<ResolversTypes['Boolean']>, "_", ParentType, ContextType>;
};

export type UserErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserError'] = ResolversParentTypes['UserError']> = {
  message: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  values: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Contact: ContactResolvers<ContextType>;
  ContactPayload: ContactPayloadResolvers<ContextType>;
  ContactsPayload: ContactsPayloadResolvers<ContextType>;
  Mutation: MutationResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  Signatures: SignaturesResolvers<ContextType>;
  Subscription: SubscriptionResolvers<ContextType>;
  UserError: UserErrorResolvers<ContextType>;
};

