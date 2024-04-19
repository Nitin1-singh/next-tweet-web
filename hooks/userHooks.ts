import { graphqlClient } from "@/graphql/client"
import { getCurrentUserQuery, getUserByIdQuery } from "@/graphql/query/user"
import { useQuery } from "@tanstack/react-query"

export const useCurrentUser = () => {
  const query = useQuery({
    queryKey: ["current-user"],
    queryFn: async () => graphqlClient.request(getCurrentUserQuery)
  }
  )

  return { ...query, user: query.data?.getCurrentUser }
}

export const useGetUserByID = (id: string) => {
  const query = useQuery({
    queryKey: ["current-user-by-id"],
    queryFn: async () => graphqlClient.request(getUserByIdQuery, { id: id })
  })
  return { ...query, user: query.data?.getUserById }
}