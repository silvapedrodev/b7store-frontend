"use client"

import { setCartState } from "@/actions/set-cart-state";
import { useCartStore } from "@/libs/cart";
import { ProductComplete } from "@/types/product";
import Image from "next/image";
import { redirect } from "next/navigation";

type Props = {
  product: ProductComplete;
}

export const ProductDetails = ({ product }: Props) => {
  const cartStore = useCartStore(state => state);

  const addToCart = async () => {
    cartStore.addItem({ productId: product.id, quantity: 1 });
    const updatedCart = useCartStore.getState().cart;
    await setCartState(updatedCart)
    //redirect('cart');
  }

  return (
    <div className="flex-1">
      <div className="text-xs text-gray-500 mb-2">Cod {String(product.id).padStart(2, '0')}</div>
      <div className="font-medium text-2xl md:text-3xl mb-6">{product.label}</div>
      <div className="font-semibold text-4xl text-blue-600 mb-2">R$ {product.price.toFixed(2)}</div>
      <div>CARRINHO: {cartStore.cart.length}</div>
      <div className="text-base text-gray-500 mb-6">Em até 12x sem juros.</div>
      <div className="flex gap-4">
        <button
          onClick={addToCart}
          className="flex-1 max-w-xs py-4 px-8 bg-blue-600 text-white border-0 rounded-sm hover:opacity-90 cursor-pointer"
        >
          Adicionar ao carrinho
        </button>
        <div
          className="cursor-pointer size-14 border border-gray-200 flex justify-center items-center rounded-sm"
        >
          <Image
            src={'/assets/ui/heart-3-line.png'}
            alt=""
            width={24}
            height={24}
          />
        </div>
        <div
          className="cursor-pointer size-14 border border-gray-200 flex justify-center items-center rounded-sm"
        >
          <Image
            src={'/assets/ui/share-line.png'}
            alt=""
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
}