import { getShippingInfo } from "@/actions/get-shipping-info"
import { formatCep } from "@/libs/format-cep"
import { useCartStore } from "@/store/cart"

export const ShippingBoxNotLogged = () => {
  const cartStore = useCartStore(state => state)

  const handleUpdateShipping = async () => {
    if (cartStore.shippingZipCode.length > 4) {
      const shippingInfo = await getShippingInfo(cartStore.shippingZipCode)
      if (shippingInfo) {
        cartStore.setShippingCost(shippingInfo.cost);
        cartStore.setShippingDays(shippingInfo.days);
      }
    }
  }

  return (
    <div className="flex gap-4">
      <input
        type="text"
        value={cartStore.shippingZipCode}
        onChange={e => cartStore.setShippingZipCode(formatCep(e.target.value))}
        className="flex-1 bg-white border border-gray-200 px-6 py-5 rounded-sm outline-0 focus:border-blue-600 focus:outline-1 focus:outline-blue-600"
        placeholder="Digite seu CEP"
      />
      <button
        className="bg-blue-600 text-white px-6 py-5 border-0 rounded-sm cursor-pointer"
        onClick={handleUpdateShipping}
      >
        Calcular
      </button>
    </div>
  )
}