"use server"

import { setServerAuthToken } from "@/libs/server-cookies"

export const SetAuthCookie = async (token: string) => {
  await setServerAuthToken(token);
}