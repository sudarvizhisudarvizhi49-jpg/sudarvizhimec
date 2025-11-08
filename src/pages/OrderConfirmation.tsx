import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Home } from "lucide-react";
import { useEffect } from "react";

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { verificationCode, total } = location.state || {};

  useEffect(() => {
    if (!verificationCode) {
      navigate("/menu");
    }
  }, [verificationCode, navigate]);

  if (!verificationCode) return null;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-success/10 p-3">
              <CheckCircle2 className="h-12 w-12 text-success" />
            </div>
          </div>
          <CardTitle className="text-2xl">Order Confirmed!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-muted-foreground mb-2">Your verification code</p>
            <div className="bg-muted rounded-lg p-6">
              <p className="text-4xl font-bold tracking-wider">{verificationCode}</p>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Show this code at the counter to collect your order
            </p>
          </div>

          <div className="space-y-2 border-t pt-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Order Total</span>
              <span className="font-semibold">₹{total}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Status</span>
              <span className="font-semibold text-accent">Preparing</span>
            </div>
          </div>

          <div className="bg-accent/10 rounded-lg p-4">
            <p className="text-sm text-center">
              Your order will be ready in approximately <strong>10-15 minutes</strong>
            </p>
          </div>

          <Button className="w-full" onClick={() => navigate("/")}>
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderConfirmation;
