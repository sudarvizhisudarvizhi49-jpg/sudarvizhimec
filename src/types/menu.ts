export type FoodCategory = "breakfast" | "lunch" | "dinner" | "snacks" | "dessert" | "beverages";
export type MealTime = "breakfast" | "lunch" | "dinner";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: FoodCategory;
  image?: string;
  available: boolean;
  rating?: number;
  reviewCount?: number;
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
