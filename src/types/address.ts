export type Address = {
  id?: number;
  zipcode: string;
  street: string;
  number: number;
  city: string;
  state: string;
  country: string;
  complement?: string;
}