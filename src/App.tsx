import { Component, type ReactNode, useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFound from "./pages/NotFound";

const getRoute = () => {
  const path = window.location.pathname.replace(/\\/+$/, "") || "/";
  const search = window.location.search;
  return { path, search };
};

class AppErrorBoundary extends Component<
  { children: ReactNode; routeKey: string },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidUpdate(previousProps: { routeKey: string }) {
    if (previousProps.routeKey !== this.props.routeKey && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  componentDidCatch(error: unknown) {
    console.error("BVHome Furnitures application error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background px-6">
          <div className="max-w-md text-center">
            <h1 className="font-display text-3xl font-semibold mb-3">
              Something went wrong
            </h1>
            <p className="text-muted-foreground mb-6">
              We couldn't load this page. Please return to the home page.
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
            >
              Back to Home
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const RoutedApp = () => {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const syncRoute = () => setRoute(getRoute());
    window.addEventListener("popstate", syncRoute);
    return () => window.removeEventListener("popstate", syncRoute);
  }, []);

  const routeKey = route.path + route.search;

  let page: ReactNode;

  if (route.path === "/") {
    page = <Index />;
  } else if (route.path === "/shop") {
    page = <ShopPage />;
  } else if (/^\/product\/[^/]+$/.test(route.path)) {
    page = <ProductDetailPage />;
  } else {
    page = <NotFound />;
  }

  return <AppErrorBoundary routeKey={routeKey}>{page}</AppErrorBoundary>;
};

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <RoutedApp />
  </TooltipProvider>
);

export default App;
