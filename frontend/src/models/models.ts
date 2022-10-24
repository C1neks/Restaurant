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
  items: [];
  subTotal: number;
  status: string;
  user: number;
}

export interface OrderDetails {
  productId: number;
  productName: string;
}

export interface CategoryType {
  name: string;
  products: ProductType[];
}

export interface CategoryDetails {
  _id: number;
  name: string;
}

export interface ProductType {
  productId: string;
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

export interface LoggedContextType {
  logged: string | null;
}
