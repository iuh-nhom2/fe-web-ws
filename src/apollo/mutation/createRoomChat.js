import gql from "graphql-tag";

const CREATE_ROOM_CHAT = gql`
  mutation createRoomChat(
    $name: String!
    $members: String!
    $lastMessage: String!
    $userSendLastMessage: String!
    $nameUserSendLastMessage: String!
  ) {
    createRoomChat(
      name: $name
      members: $members
      lastMessage: $lastMessage
      userSendLastMessage: $userSendLastMessage
      nameUserSendLastMessage: $nameUserSendLastMessage
    ) {
      id
      name
      members
      lastMessage
      userSendLastMessage
      nameUserSendLastMessage
    }
  }
`;

export default CREATE_ROOM_CHAT;
