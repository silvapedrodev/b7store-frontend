import { setServerCart } from "@/libs/server-cookies";
import { CardItem } from "@/types/cart-item";

export const setCartState = async (cart: CardItem[]) => {
  await setServerCart(cart);
}