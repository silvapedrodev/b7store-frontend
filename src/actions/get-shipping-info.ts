"use server"

type ShippingInfoResponse = {
  zipcode: string;
  cost: number;
  days: number;
}

export const getShippingInfo = async (zipcode: string): Promise<ShippingInfoResponse | false> => {
  // To-do fazer requisição para pegar info do CEP.

  return {
    zipcode: '12345-678',
    cost: 7.90,
    days: 3
  }
}