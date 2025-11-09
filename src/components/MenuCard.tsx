import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MenuItem } from "@/types/menu";
import { Leaf, Drumstick, Plus, Star, IceCream, Droplet, Coffee, UtensilsCrossed } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { RatingDialog } from "./RatingDialog";

interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard = ({ item }: MenuCardProps) => {
  const { addToCart } = useCart();
  const [ratingDialogOpen, setRatingDialogOpen] = useState(false);

  const getCategoryIcon = () => {
    switch (item.category) {
      case "dessert":
        return <IceCream className="h-3 w-3" />;
      case "beverages":
        return <Droplet className="h-3 w-3" />;
      case "snacks":
        return <Coffee className="h-3 w-3" />;
      case "breakfast":
      case "lunch":
      case "dinner":
        return <UtensilsCrossed className="h-3 w-3" />;
      default:
        return <Leaf className="h-3 w-3" />;
    }
  };

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        {item.image && (
          <div className="aspect-[4/3] overflow-hidden bg-muted">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        )}
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-base">{item.name}</h3>
                <Badge variant="outline" className="h-5">
                  {getCategoryIcon()}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-1 capitalize">
                {item.category}
              </p>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {item.description}
              </p>
              {item.rating && (
                <button
                  onClick={() => setRatingDialogOpen(true)}
                  className="flex items-center gap-1 mt-2 hover:opacity-70 transition-opacity"
                >
                  <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                  <span className="text-sm font-medium">{item.rating}</span>
                  {item.reviewCount && (
                    <span className="text-xs text-muted-foreground">
                      ({item.reviewCount})
                    </span>
                  )}
                </button>
              )}
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

      <RatingDialog
        open={ratingDialogOpen}
        onOpenChange={setRatingDialogOpen}
        menuItemId={item.id}
        menuItemName={item.name}
        onRatingSubmitted={() => {}}
      />
    </>
  );
};
