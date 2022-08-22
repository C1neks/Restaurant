export interface UserDetails {
  _id: number;
  name: string;
  email: string;
  isAdmin: boolean;
  password: string;
  orders: [];
}

export interface Order {
  _id: number;
  items: any;
  subTotal: number;
  status: string;
  user: number;
}

export interface ProductType {
  productId: any;
  quantity: number;
  _id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface ItemFromCart {
  productId: number;
  name: string;
  quantity: number;
  price: number;
  total: number;
  _id: number;
}

export interface ItemsContextType {
  cartItems: ProductType[];
  totalPrice: number;
  onAddToCart: (item: ProductType) => void;
  onRemoveFromCart: (item: ProductType) => void;
}

// export interface ItemsContextType {
//   cartItems: ItemFromCart[];
//   totalPrice: number;
//   onAddToCart: (item: ItemFromCart) => void;
//   onRemoveFromCart: (item: ItemFromCart) => void;
// }

export interface LoggedContextType {
  logged: string | null;
}
