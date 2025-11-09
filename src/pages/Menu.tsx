import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MenuCard } from "@/components/MenuCard";
import { CartSheet } from "@/components/CartSheet";
import { FeedbackDialog } from "@/components/FeedbackDialog";
import { menuItems } from "@/data/menuData";
import { FoodCategory } from "@/types/menu";
import { Coffee, IceCream, Droplet, UtensilsCrossed, User, LogOut, Shield, LogIn } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useUserRole } from "@/hooks/useUserRole";
import { toast } from "sonner";

const Menu = () => {
  const navigate = useNavigate();
  const { role } = useUserRole();
  const [filter, setFilter] = useState<FoodCategory | "all">("all");
  const [userEmail, setUserEmail] = useState<string>("");

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUserEmail(user.email || "");
      }
    });
  }, []);

  const filteredItems = menuItems.filter(
    (item) => filter === "all" || item.category === filter
  );

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">MEC Canteen</h1>
          <div className="flex items-center gap-2">
            {userEmail ? (
              <>
                {role === "admin" && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate("/admin")}
                  >
                    <Shield className="h-4 w-4 mr-2" />
                    Admin
                  </Button>
                )}
                <FeedbackDialog />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate("/dashboard")}
                >
                  <User className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
                <Button variant="ghost" size="sm" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/auth")}
              >
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            )}
            <CartSheet />
          </div>
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
              variant={filter === "breakfast" ? "default" : "outline"}
              onClick={() => setFilter("breakfast")}
            >
              <UtensilsCrossed className="h-4 w-4 mr-2" />
              Breakfast
            </Button>
            <Button
              variant={filter === "lunch" ? "default" : "outline"}
              onClick={() => setFilter("lunch")}
            >
              <UtensilsCrossed className="h-4 w-4 mr-2" />
              Lunch
            </Button>
            <Button
              variant={filter === "dinner" ? "default" : "outline"}
              onClick={() => setFilter("dinner")}
            >
              <UtensilsCrossed className="h-4 w-4 mr-2" />
              Dinner
            </Button>
            <Button
              variant={filter === "snacks" ? "default" : "outline"}
              onClick={() => setFilter("snacks")}
            >
              <Coffee className="h-4 w-4 mr-2" />
              Snacks
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
