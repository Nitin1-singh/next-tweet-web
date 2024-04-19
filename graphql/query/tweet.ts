import { graphql } from "@/gql";

export const getAllTweetQuery = graphql(`#graphql
  query GetAllTweets {
    getAllTweets {
      id
      content
      image_url
      author {
        id
        first_name
        last_name
        profile_img_url
      }

    }
  }
`)