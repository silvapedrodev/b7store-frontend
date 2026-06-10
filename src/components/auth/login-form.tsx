"use client"

import { login } from "@/actions/login";
import { setAuthCookie } from "@/actions/set-auth-cookie";
import { useAuthStore } from "@/store/auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ChangeEvent, useState, useTransition } from "react";
import z from "zod";

const schema = z.object({
  email: z.email({ error: 'E-mail inválido' }),
  password: z.string().min(6, { error: 'A senha deve ter pelo menos 6 caracteres' })
});

type ErrorStructure = {
  email?: string;
  password?: string;
  form?: string;
}

export const LoginForm = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<ErrorStructure>({});
  const [pending, startTransition] = useTransition();
  const [showPassword, setShowPassword] = useState(false)
  const authStore = useAuthStore(state => state);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm(form => ({ ...form, [e.target.name]: e.target.value }));
    setErrors(errors => ({ ...errors, [e.target.name]: undefined, form: undefined }));
  }

  const handleSubmit = (e: ChangeEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fielErrors: any = {};
      result.error.issues.forEach(err => {
        if (err.path[0]) {
          fielErrors[err.path[0]] = err.message;
        }
      });
      setErrors(fielErrors);
      return;
    }

    setErrors({});
    startTransition(async () => {
      const res = await login(form)
      if (res.error) {
        setErrors({ form: res.error });
      } else if (res.token) {
        await setAuthCookie(res.token);
        authStore.setToken(res.token);
        redirect('/')
      }
    });
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between items-center mt-10 mb-7 md:mb-10">
        <Image
          src={'/assets/ui/logo-black.png'}
          alt="logo"
          width={143}
          height={48}
          className="w-40 h-auto mx-auto"
        />
      </div>
      <div className="text-center">
        <h2 className="font-medium text-2xl mb-4">Faça o seu login</h2>
        <p className="text-lg text-gray-500 mb-11 md:mb-8">Insira seus dados e faça login</p>
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="mb-1 text-sm text-gray-500">E-mail</label>
        <input
          autoFocus
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          value={form.email}
          onChange={handleChange}
          className="w-full bg-white border border-gray-200 rounded-sm p-4"
          disabled={pending}
        />
        {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>
        }
      </div>
      <div className="mb-8">
        <label htmlFor="password" className="mb-1 text-sm text-gray-500">Senha</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            placeholder="Digite sua senha"
            value={form.password}
            onChange={handleChange}
            className="w-full bg-white border border-gray-200 rounded-sm p-4"
            disabled={pending}
          />

          <button
            type="button"
            onClick={() => setShowPassword(prev => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            <Image
              src={showPassword ? '/assets/ui/eye-line.png' : '/assets/ui/eye-off-line.png'}
              alt={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
              width={24}
              height={24}
            />
          </button>
        </div>
        {errors.password && <div className="text-red-500 text-sm mt-1">{errors.password}</div>
        }
      </div>
      <button
        type="submit"
        className={`w-full h-14 bg-blue-600 text-white py-2 rounded-sm ${errors.form ? 'mb-2' : 'mb-12'} cursor-pointer hover:bg-blue-600/90`}
        disabled={pending}
      >
        {pending ? 'Entrando...' : 'Entrar'}
      </button>
      {errors.form && <div className="text-red-500 text-sm mt-1 mb-12">{errors.form}</div>}

      <div className="text-center mb-10">
        <Link
          href={'/sign-up'}
          className="text-gray-500"
        >
          Não tem cadastro? <span className="font-medium text-blue-600">Cadastre-se aqui</span>
        </Link>
      </div>
    </form>
  );
}