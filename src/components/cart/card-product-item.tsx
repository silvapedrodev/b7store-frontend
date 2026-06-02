import { CartListItem } from "@/types/cart-list-item"
import Image from "next/image";

type Props = {
  item: CartListItem;
}

export const CartProductItem = ({ item }: Props) => {
  return (
    <div className="flex items-center p-6 md:p-8 gap-4 md:gap-8 border-0 md:border-b border-gray-200">
      <div className="border border-gray-200 p-2 rounded-sm">
        <Image
          src={item.product.image}
          alt={item.product.label}
          width={96}
          height={96}
          className="size-24 md:size-16"
        />
      </div>
      <div className="flex-1 flex flex-col md:flex-row justify-between md:items-center">
        <div>
          <div className="font-medium text-sm">{item.product.label}</div>
          <div className="hidden md:block text-xs text-gray-500 mt-1.5">CÓD {String(item.product.id).padStart(2, '0')}</div>
        </div>
        <div>{item.quantity}</div>
      </div>
      <div className="w-24 md:w-40 flex flex-col md:flex-row justify-between items-end md:items-center">
        <div className="font-medium text-lg text-blue-600">R$ {item.product.price.toFixed(2)}</div>
        <div>
          <div className="size-10 md:size-12 border border-gray-200 rounded-sm p-2.5 md:p-3 flex justify-center items-center cursor-pointer">
            <Image
              src={'/assets/ui/trash.png'}
              alt="lixeira"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  )
}