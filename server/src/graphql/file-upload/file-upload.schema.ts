export const fileUploadTypeDefs = `#graphql
  extend type Query {
    getSignature: Signatures
  }
  type Signatures {
    timestamp: String!
    signature: String!
  }

`;
