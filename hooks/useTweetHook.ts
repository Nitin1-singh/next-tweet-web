import { CreateTweetData } from "@/gql/graphql"
import { graphqlClient } from "@/graphql/client"
import { createTweetMutation } from "@/graphql/mutation/tweet"
import { getAllTweetQuery } from "@/graphql/query/tweet"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

export const useMutateTweet = () => {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (payload: CreateTweetData) => graphqlClient.request(createTweetMutation, { payload }),
    onMutate: () => toast.loading("sending", { id: "1" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-all-tweets"] })
      toast.success("send", { id: "1" })
    },
  })
  return mutation
}

export const useGetAllTweets = () => {
  const query = useQuery({
    queryKey: ["get-all-tweets"],
    queryFn: () => graphqlClient.request(getAllTweetQuery)
  })
  return { ...query, tweets: query.data?.getAllTweets }
}