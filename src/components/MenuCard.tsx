import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MenuItem } from "@/types/menu";
import { Leaf, Drumstick, Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard = ({ item }: MenuCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-base">{item.name}</h3>
              <Badge variant={item.category === "veg" ? "secondary" : "default"} className="h-5">
                {item.category === "veg" ? (
                  <Leaf className="h-3 w-3" />
                ) : (
                  <Drumstick className="h-3 w-3" />
                )}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {item.description}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <span className="text-lg font-bold">₹{item.price}</span>
        <Button
          size="sm"
          onClick={() => addToCart(item)}
          disabled={!item.available}
        >
          <Plus className="h-4 w-4 mr-1" />
          Add
        </Button>
      </CardFooter>
    </Card>
  );
};
