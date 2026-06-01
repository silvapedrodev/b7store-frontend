import { CardItem } from "@/types/cart-item";
import { create } from "zustand";

type CartState = {
  cart: CardItem[];
  shippingZipCode: string;
  shippingCost: number;
  shippingDays: number;
  selectedAddressId: number | null;
  addItem: (cartItem: CardItem) => void;
  removeItem: (productId: string | number) => void;
  updateQuantity: (productId: string | number, quantity: number) => void;
  setShippingZipCode: (zipcode: string) => void;
  setShippingCost: (cost: number) => void;
  setShippingDays: (days: number) => void;
  setSelectedAddressId: (id: number | null) => void;
  clearCart: () => void;
  clearShipping: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  shippingZipCode: '',
  shippingCost: 0,
  shippingDays: 0,
  selectedAddressId: null,

  addItem: ({ productId, quantity }) => set(state => {
    const existing = state.cart.find(item => item.productId === productId);
    let newCart

    if (existing) {
      newCart = state.cart.map(item =>
        (item.productId === productId)
          ? { ...item, quantity: item.quantity + quantity } : item
      );
    } else {
      newCart = [...state.cart, { productId, quantity }];
    }

    return { cart: newCart }
  }),

  removeItem: (productId) => set(state => {
    const newCart = state.cart.filter(item => item.productId !== productId);
    return { cart: newCart }
  }),

  updateQuantity: (productId, quantity) => set(state => {
    const newCart = state.cart.map(item =>
      (item.productId === productId)
        ? { ...item, quantity } : item
    );
    return { cart: newCart }
  }),

  setShippingZipCode: (zipcode) => set({ shippingZipCode: zipcode }),

  setShippingCost: (cost) => set({ shippingCost: cost }),

  setShippingDays: (days) => set({ shippingDays: days }),

  setSelectedAddressId: (id) => set({ selectedAddressId: id }),

  clearCart: () => set({
    cart: [],
    shippingZipCode: '',
    shippingCost: 0,
    shippingDays: 0,
    selectedAddressId: null
  }),

  clearShipping: () => set({
    shippingZipCode: '',
    shippingCost: 0,
    shippingDays: 0,
    selectedAddressId: null
  })
}));