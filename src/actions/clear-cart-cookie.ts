"use server"

import { clearServerCart } from "@/libs/server-cookies"

export const ClearCartCookie = async () => {
  await clearServerCart();
}