import gql from "graphql-tag";

const USERS =  gql`
  query users($userName: String!) {
    users(userName: $userName) {
      id
      userName
      firstName
      lastName
    }
  }
`

export default USERS;