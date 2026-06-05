"use client"

import { useAuthStore } from "@/store/auth";
import { useCartStore } from "@/store/cart";
import { ShippingBoxNotLogged } from "./shipping-box-not-logged";
import { ShippingBoxLogged } from "./shipping-box-logged";

export const ShippingBox = () => {
  const { token, hydrated } = useAuthStore(state => state);
  const cartStore = useCartStore(state => state);

  if (!hydrated) return null;

  return (
    <div className="flex flex-col gap-4">
      <div className="text-gray-500">Calcular frete e prazo</div>
      <div className="">
        {!token ? <ShippingBoxNotLogged /> : <ShippingBoxLogged />}
      </div>
      {cartStore.shippingDays > 0 &&
        <div className="bg-white border border-gray-200 p-6 rounded-sm">
          <div className="flex items-center">
            <div className="flex-1">Receba em até {cartStore.shippingDays} {cartStore.shippingDays != 1 ? 'dias úteis' : 'dia útil'}</div>
            <div className="font-semibold text-lime-500">R$ {cartStore.shippingCost.toFixed(2)}</div>
          </div>
        </div>
      }
    </div>
  );
}