export const contactTypeDefs = `#graphql
  extend type Query {
    getContact(id: ID!): ContactPayload!
    getContacts: ContactsPayload!
  }

  extend type Mutation {
    contactCreate(input: ContactInput!): ContactPayload!
    contactUpdate(input: ContactUpdateInput!): ContactPayload!
    contactDelete(id: ID!): ContactPayload!
  }

  input ContactInput {
    name: String!
    email: String!
    phone: String!
    image: String!
  }

  input ContactUpdateInput {
    id: ID!
    name: String!
    email: String!
    phone: String!
    image: String!
  }

 type Contact {
    id: ID!
    name: String
    email: String
    phone: String
    image: String
  }

  type ContactPayload {
    userErrors: [UserError!]!
    contact: Contact
  }
 
  type ContactsPayload {
    userErrors: [UserError!]!
    contacts: [Contact!]
  }

`;
