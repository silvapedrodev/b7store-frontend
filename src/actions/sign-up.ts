"use server"

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
  // To-do requisição para fazer o cadastro

  return { error: null }
}