import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Clock, ShoppingBag, Smartphone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-canteen.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-purple-600 to-pink-600 animate-gradient" />
        
        {/* Sparkling lights */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-sparkle"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff'][Math.floor(Math.random() * 4)],
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 2}s`,
                boxShadow: `0 0 ${Math.random() * 20 + 10}px currentColor`,
              }}
            />
          ))}
        </div>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative z-10 mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Skip the Queue,<br />Order Your Food
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Fresh meals from Madras Engineering College Canteen delivered to you with just a few taps
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8"
              onClick={() => navigate("/menu")}
            >
              Order Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20"
              onClick={() => navigate("/auth")}
            >
              User Sign In
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20"
              onClick={() => navigate("/admin/login")}
            >
              Admin Login
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose MEC Canteen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Save Time</h3>
              <p className="text-muted-foreground">
                No more waiting in long queues. Order ahead and pick up when ready.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10">
                <ShoppingBag className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Fresh & Tasty</h3>
              <p className="text-muted-foreground">
                Enjoy authentic South Indian cuisine prepared fresh daily.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                <Smartphone className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Easy Ordering</h3>
              <p className="text-muted-foreground">
                Simple mobile interface. Order in seconds with multiple payment options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl mb-8 opacity-90">
            Browse our delicious menu and place your order now
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8"
            onClick={() => navigate("/menu")}
          >
            View Menu
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
