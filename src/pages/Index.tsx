import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import TrendingSection from "@/components/home/TrendingSection";
import InspirationSection from "@/components/home/InspirationSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TrustBadges from "@/components/home/TrustBadges";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustBadges />
        <CategoryShowcase />
        <FeaturedProducts />
        <TrendingSection />
        <InspirationSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
