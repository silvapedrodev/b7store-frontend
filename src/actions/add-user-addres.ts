"use server"

import { data } from "@/data"
import { Address } from "@/types/address"

export const addUserAddress = async (token: string, address: Address) => {
  // To-do: Requisição para adicionar novo endereço
  return data.addresses;
}