import { gql } from "@apollo/client";

const SEND_MESSAGE = gql`
    mutation sendMessage($user: String!, $text: String!) {
        sendMessage(user: $user, text: $text){
            id
            text
            user
        }
    }
`;

export default SEND_MESSAGE;