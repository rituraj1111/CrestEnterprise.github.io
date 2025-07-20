import Header from "@/components/Header";
import VideoHero from "@/components/VideoHero";
import ProductsSection from "@/components/ProductsSection";
import CustomersSection from "@/components/CustomersSection";
import AchievementsSection from "@/components/AchievementsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <VideoHero />
        <ProductsSection />
        <CustomersSection />
        <AchievementsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
