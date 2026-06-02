import { CartListItem } from "@/types/cart-list-item";
import { CartProductItem } from "./card-product-item";

type Props = {
  initialList: CartListItem[];
}

export const CartProductList = ({ initialList }: Props) => {
  return (
    <div className="bg-white border md:border-b-0 rounded-sm border-gray-200">
      {initialList.map(item => (
        <CartProductItem
          key={item.product.id}
          item={item}
        />
      ))}
    </div>
  )
}