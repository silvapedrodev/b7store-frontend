"use server"

import { clearServerAuthToken } from "@/libs/server-cookies"

export const ClearAuthCookie = async () => {
  await clearServerAuthToken();
}