import { graphql } from "@/gql";

export const createTweetMutation = graphql(`#graphl
  mutation Mutation($payload: CreateTweetData!) {
  createTweet(payload: $payload) {
    id
  }
}
`)