import { gql } from "apollo-server-express";
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "User" type defines the queryable fields for every user in our data source.

  type Message {
    id: ID!
    user: String!
    text: String!
  }
  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "users" query returns an array of zero or more user (defined above).
  type Query {
    messages: [Message]
    message(id: Int): Message
  }

  type Mutation {
    sendMessage(user: String, text: String): Message
  }
  type Subscription {
    messages: [Message!]
  }
`;

export { typeDefs };
