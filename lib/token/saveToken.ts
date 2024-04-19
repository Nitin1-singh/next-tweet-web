"use server"
import { cookies } from "next/headers";

export async function saveToken(token: string) {
  cookies().set("login_token", token)
  return true
}
export async function getToken() {
  const token = cookies().get("login_token")
  if (token)
    return token
}