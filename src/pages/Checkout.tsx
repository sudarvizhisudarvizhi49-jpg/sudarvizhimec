import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { ArrowLeft, CreditCard, Smartphone, QrCode, Banknote } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, total, clearCart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState<string>("");

  const paymentMethods = [
    { id: "gpay", name: "Google Pay", icon: Smartphone },
    { id: "paytm", name: "Paytm", icon: CreditCard },
    { id: "qr", name: "QR Scan", icon: QrCode },
    { id: "cash", name: "Cash on Pickup", icon: Banknote },
  ];

  const handlePlaceOrder = () => {
    if (!selectedPayment) {
      toast.error("Please select a payment method");
      return;
    }

    // Generate mock verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    
    toast.success("Order placed successfully!", {
      description: `Your verification code is: ${verificationCode}`,
    });

    clearCart();
    navigate("/order-confirmation", { 
      state: { verificationCode, total }
    });
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardHeader>
            <CardTitle>Cart is Empty</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Your cart is empty. Add items from the menu to place an order.
            </p>
            <Button onClick={() => navigate("/menu")} className="w-full">
              Browse Menu
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">Checkout</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-2xl">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>
                <p className="font-semibold">₹{item.price * item.quantity}</p>
              </div>
            ))}
            <div className="pt-3 border-t flex justify-between items-center text-lg font-bold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Select Payment Method</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Button
                  key={method.id}
                  variant={selectedPayment === method.id ? "default" : "outline"}
                  className="h-auto py-4 flex flex-col gap-2"
                  onClick={() => setSelectedPayment(method.id)}
                >
                  <Icon className="h-6 w-6" />
                  <span>{method.name}</span>
                </Button>
              );
            })}
          </CardContent>
        </Card>

        <Button
          size="lg"
          className="w-full"
          onClick={handlePlaceOrder}
          disabled={!selectedPayment}
        >
          Place Order
        </Button>
      </main>
    </div>
  );
};

export default Checkout;
