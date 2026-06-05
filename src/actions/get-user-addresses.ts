"use server"

import { data } from "@/data"
import { Address } from "@/types/address";

export const getUserAddresses = async (token: string): Promise<Address[]> => {
  // To-do pegar endereços do usuário pelo token.

  return data.addresses;
}
