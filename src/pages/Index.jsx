import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Bitcoin, DollarSign, LineChart, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Shield className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">CryptoSaaS</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80 text-foreground" href="/">Home</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#features">Features</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#pricing">Pricing</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#about">About</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contact">Contact</a>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <Button className="ml-auto">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Revolutionize Your Crypto Trading</h1>
        <p className="text-xl mb-8">Powerful analytics and insights for crypto traders and investors</p>
        <Button size="lg" className="mb-8">Start Free Trial</Button>
        <img src="/placeholder.svg" alt="Crypto Analytics Dashboard" className="mx-auto object-cover w-full max-w-3xl h-[400px] rounded-lg shadow-lg" />
      </section>

      {/* Features Section */}
      <section id="features" className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <LineChart className="h-10 w-10 mb-4" />, title: "Real-time Analytics", description: "Get up-to-the-minute insights on market trends" },
              { icon: <Bitcoin className="h-10 w-10 mb-4" />, title: "Multi-coin Support", description: "Track and analyze all major cryptocurrencies" },
              { icon: <Shield className="h-10 w-10 mb-4" />, title: "Advanced Security", description: "Bank-level encryption to protect your data" },
              { icon: <DollarSign className="h-10 w-10 mb-4" />, title: "Portfolio Management", description: "Easily manage and optimize your crypto portfolio" },
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle>{feature.icon}{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
          {[
            { step: 1, title: "Sign Up", description: "Create your account in minutes" },
            { step: 2, title: "Connect", description: "Link your crypto exchanges and wallets" },
            { step: 3, title: "Analyze", description: "Get instant insights and recommendations" },
            { step: 4, title: "Trade", description: "Make informed decisions and optimize your portfolio" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {[
                { name: "Alice Johnson", role: "Crypto Trader", quote: "CryptoSaaS has completely transformed my trading strategy. The insights are invaluable!" },
                { name: "Bob Smith", role: "Investor", quote: "I've seen a significant increase in my portfolio's performance since using CryptoSaaS." },
                { name: "Carol Williams", role: "Financial Advisor", quote: "The analytics provided by CryptoSaaS are unparalleled. It's a game-changer for my clients." },
              ].map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <img src="/placeholder.svg" alt={testimonial.name} className="w-20 h-20 rounded-full mb-4" />
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{testimonial.role}</p>
                      <p className="text-center italic">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Basic", price: "$29", features: ["Real-time analytics", "Multi-coin support", "Basic portfolio management"] },
            { name: "Pro", price: "$79", features: ["Everything in Basic", "Advanced portfolio management", "API access", "Priority support"] },
            { name: "Enterprise", price: "Custom", features: ["Everything in Pro", "Dedicated account manager", "Custom integrations", "On-premise deployment"] },
          ].map((plan, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold text-center mb-6">{plan.price}<span className="text-xl font-normal">/month</span></p>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 mt-auto">
                <Button className="w-full">{plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="h-6 w-6 mr-2" />
              <span className="font-bold">CryptoSaaS</span>
            </div>
            <nav className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</a>
            </nav>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
              <a href="#" className="text-muted-foreground hover:text-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
              <a href="#" className="text-muted-foreground hover:text-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;