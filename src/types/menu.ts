export type FoodCategory = "veg" | "nonveg";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: FoodCategory;
  image?: string;
  available: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: "pending" | "preparing" | "ready" | "completed";
  verificationCode?: string;
  createdAt: Date;
}
