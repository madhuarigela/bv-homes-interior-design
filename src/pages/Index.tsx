import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import TrendingSection from "@/components/home/TrendingSection";
import InspirationSection from "@/components/home/InspirationSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CategoryShowcase />
        <FeaturedProducts />
        <TrendingSection />
        <InspirationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
