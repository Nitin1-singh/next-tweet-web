"use client"
import { graphqlClient } from "@/graphql/client";
import { verifyUserTokenQuery } from "@/graphql/query/user";
import { useGetAllTweets } from "@/hooks/useTweetHook";
import { useCurrentUser } from "@/hooks/userHooks";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useCallback } from "react";
import toast from "react-hot-toast";

export function GoogleLoginBtn() {
  const { user } = useCurrentUser()
  const { tweets } = useGetAllTweets()

  const handleLogin = useCallback(async (cred: CredentialResponse) => {
    const googleToken = cred.credential
    if (!googleToken) return toast.error("You are not sign in")
    const { verifyGoogleToken } = await graphqlClient.request(verifyUserTokenQuery, { token: googleToken })
    if (verifyGoogleToken) {
      localStorage.setItem("login_token", verifyGoogleToken)
      toast.success("sucess")
    }

  }, [])
  if (!user)
    return (
      <GoogleLogin onSuccess={handleLogin} />
    )
}