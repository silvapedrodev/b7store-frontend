"use client"

import { getShippingInfo } from "@/actions/get-shipping-info";
import { getUserAddresses } from "@/actions/get-user-addresses";
import { useAuthStore } from "@/store/auth";
import { useCartStore } from "@/store/cart"
import { Address } from "@/types/address";
import { ChangeEvent, useEffect, useState, useTransition } from "react";
import { AddressModal } from "./address-modal";
import { addUserAddress } from "@/actions/add-user-addres";

export const ShippingBoxLogged = () => {
  const { token, hydrated } = useAuthStore(state => state);
  const cartStore = useCartStore(state => state);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [modalOpened, setModalOpened] = useState(false);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    if (hydrated && token) {
      startTransition(() => {
        getUserAddresses(token).then(setAddresses);
      });
    }
  }, [token, hydrated]);

  useEffect(() => {
    if (cartStore.selectedAddressId) {
      updateShippingInfo();
    }
  }, [cartStore.selectedAddressId, cartStore.shippingDays])

  const handleSelectAddress = async (e: ChangeEvent<HTMLSelectElement>) => {
    cartStore.clearShipping();
    const id = parseInt(e.target.value);

    if (id) {
      const address = addresses.find(addr => addr.id === id);
      if (address) {
        cartStore.setShippingZipCode(address.zipcode);
        cartStore.setSelectedAddressId(id);
      }
    }
  }

  const updateShippingInfo = async () => {
    if (cartStore.shippingZipCode.length > 4) {
      const shippingInfo = await getShippingInfo(cartStore.shippingZipCode);
      if (shippingInfo) {
        cartStore.setShippingCost(shippingInfo.cost);
        cartStore.setShippingDays(shippingInfo.days);
      }
    }
  }

  const handleAddAddress = async (address: Address) => {
    if (!token) return;
    const newAddresses = await addUserAddress(token, address);
    if (newAddresses) {
      setAddresses(newAddresses);
      setModalOpened(false);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <select
        value={cartStore.selectedAddressId ?? ''}
        onChange={handleSelectAddress}
        className="flex-1 bg-white border border-gray-200 px-6 py-5 rounded-sm outline-0 focus:border-blue-600 focus:outline-1 focus:outline-blue-600"
      >
        <option value="">
          {addresses.length === 0 ? 'Nenhum endereço cadastrado' : 'Selecione um endereço'}
        </option>
        {addresses.map(item => (
          <option key={item.id} value={item.id}>
            {item.street}, {item.number} - {item.city} ({item.zipcode})
          </option>
        ))}
      </select>
      <button
        onClick={() => setModalOpened(true)}
        className="border-0 cursor-pointer"
      >Adicionar um novo endereço</button>
      <AddressModal
        open={modalOpened}
        onClose={() => setModalOpened(false)}
        onAdd={handleAddAddress}
      />
    </div>
  )
}