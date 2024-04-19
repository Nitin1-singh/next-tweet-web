import { GraphQLClient } from "graphql-request";
export const graphqlClient = new GraphQLClient("http://localhost:3003/graphql", {
  headers: () => ({
    Authorization: `Bearer ${localStorage.getItem("login_token")}`
  })
})
