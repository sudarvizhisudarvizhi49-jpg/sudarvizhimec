import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MenuCard } from "@/components/MenuCard";
import { CartSheet } from "@/components/CartSheet";
import { menuItems } from "@/data/menuData";
import { FoodCategory } from "@/types/menu";
import { Leaf, Drumstick, IceCream, Droplet } from "lucide-react";

const Menu = () => {
  const [filter, setFilter] = useState<FoodCategory | "all">("all");

  const filteredItems = menuItems.filter(
    (item) => filter === "all" || item.category === filter
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">MEC Canteen</h1>
          <CartSheet />
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">Our Menu</h2>
          <p className="text-muted-foreground mb-4">
            Fresh food prepared daily at Madras Engineering College
          </p>
          
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
            >
              All Items
            </Button>
            <Button
              variant={filter === "veg" ? "secondary" : "outline"}
              onClick={() => setFilter("veg")}
            >
              <Leaf className="h-4 w-4 mr-2" />
              Vegetarian
            </Button>
            <Button
              variant={filter === "nonveg" ? "default" : "outline"}
              onClick={() => setFilter("nonveg")}
            >
              <Drumstick className="h-4 w-4 mr-2" />
              Non-Veg
            </Button>
            <Button
              variant={filter === "dessert" ? "default" : "outline"}
              onClick={() => setFilter("dessert")}
            >
              <IceCream className="h-4 w-4 mr-2" />
              Desserts
            </Button>
            <Button
              variant={filter === "beverages" ? "default" : "outline"}
              onClick={() => setFilter("beverages")}
            >
              <Droplet className="h-4 w-4 mr-2" />
              Beverages
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Menu;
