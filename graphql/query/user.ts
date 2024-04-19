import { graphql } from "../../gql";

export const verifyUserTokenQuery = graphql(`#graphql
  query VerifyUserGoogleToken($token:String!) {
    verifyGoogleToken(token: $token)
  }
`
)
export const getCurrentUserQuery = graphql(`#graphql
query GetCurrentUser {
  getCurrentUser {
    id
    first_name
    last_name
    email
    profile_img_url
    tweets {
      id
      content
    }
    follower {
      id
      first_name
      last_name
      profile_img_url
    }
    following {
      id
      first_name
      last_name
      profile_img_url
    }
  }
}
`)

export const getUserByIdQuery = graphql(`#graphql
query GetUserById($id: ID!) {
  getUserById(id: $id) {
    id
    first_name
    last_name
    profile_img_url
    tweets {
      id
      content
      author {
        first_name
        last_name
        profile_img_url
      }
    }
    follower {
      id
      first_name
      last_name
      profile_img_url
    }
    following {
      id
      first_name
      last_name
      profile_img_url
    }
  }
}
`)