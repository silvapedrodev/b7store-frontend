import { formatCep } from "@/libs/format-cep";
import { Address } from "@/types/address";
import { ChangeEvent, useState, useTransition } from "react";
import z from "zod";

const schema = z.object({
  zipcode: z.string().min(1, 'CEP é obrigatório'),
  street: z.string().min(1, 'Rua é obrigatória'),
  number: z.string().min(1, 'Número é obrigatória'),
  city: z.string().min(1, 'Cidade é obrigatória'),
  state: z.string().min(1, 'Estado é obrigatória'),
  country: z.string().min(1, 'País é obrigatória'),
  complement: z.string().optional()
})

type Props = {
  open: boolean;
  onClose: () => void;
  onAdd: (address: Address) => Promise<void>
}

export const AddressModal = ({ open, onClose, onAdd }: Props) => {
  let emptyAddress: Address = {
    zipcode: '',
    street: '',
    number: 0,
    city: '',
    state: '',
    country: '',
    complement: ''
  }

  const [form, setForm] = useState<Address>(emptyAddress);
  const [error, setError] = useState('')
  const [pending, startTransition] = useTransition();

  if (!open) return null

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: name === 'zipcode' ? formatCep(value) : value,
    });
  }

  const handleSubmit = (e: ChangeEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      setError(result.error.issues[0]?.message || 'Preencha todos campos');
      result;
    }
    setError('')
    startTransition(async () => {
      try {
        await onAdd(form);
        setForm(emptyAddress)
      } catch (err: any) {
        setError(err?.message || 'Erro ao salvar o endereço');
      }
    });
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/90 z-50">
      <button disabled={pending} className="absolute top-4 right-4 text-4xl text-white cursor-pointer" onClick={onClose}>&times;</button>
      <div className="bg-white p-6 rounded w-full max-w-md">
        <h2 className="font-medium text-xl mb-4">Adicionar endereço</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            name="zipcode"
            placeholder="Digite o CEP"
            value={form.zipcode}
            onChange={handleChange}
            disabled={pending}
            className="border border-gray-200 px-3 py-2 rounded outline-0"
          />
          <input
            type="text"
            name="street"
            placeholder="Digite a rua"
            value={form.street}
            onChange={handleChange}
            disabled={pending}
            className="border border-gray-200 px-3 py-2 rounded outline-0"
          />
          <input
            type="number"
            name="number"
            placeholder="Digite o número"
            value={form.number}
            onChange={handleChange}
            disabled={pending}
            className="border border-gray-200 px-3 py-2 rounded outline-0"
          />
          <input
            type="text"
            name="city"
            placeholder="Digite a cidade"
            value={form.city}
            onChange={handleChange}
            disabled={pending}
            className="border border-gray-200 px-3 py-2 rounded outline-0"
          />
          <input
            type="text"
            name="state"
            placeholder="Digite o estado"
            value={form.state}
            onChange={handleChange}
            disabled={pending}
            className="border border-gray-200 px-3 py-2 rounded outline-0"
          />
          <input
            type="text"
            name="country"
            placeholder="Digite o país"
            value={form.country}
            onChange={handleChange}
            disabled={pending}
            className="border border-gray-200 px-3 py-2 rounded outline-0"
          />
          <input
            type="text"
            name="complement"
            placeholder="Digite o complemento"
            value={form.complement}
            onChange={handleChange}
            disabled={pending}
            className="border border-gray-200 px-3 py-2 rounded outline-0"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-4 rounded-sm cursor-pointer"
            disabled={pending}
          >
            {pending ? 'Salvando' : 'Adicionar'}
          </button>
        </form>
      </div>
    </div>
  )
}