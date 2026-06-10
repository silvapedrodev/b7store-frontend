"use server"

import { api } from "@/libs/axios";

type SignUpData = {
  name: string
  email: string;
  password: string;
}

export const signUp = async ({
  name,
  email,
  password
}: SignUpData): Promise<{ error: string | null }> => {
  try {
    const response = await api.post('/user/register', { name, email, password });
    if (response.status === 201 && response.data.user) {
      return { error: null }
    }
  } catch { }
  return { error: 'Ocorreu um erro' }
}