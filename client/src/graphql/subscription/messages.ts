import { gql } from "@apollo/client";

const GET_MESSAGES = gql`
  subscription {
    messages {
      id
      text
      user
    }
}
`;

export default GET_MESSAGES;