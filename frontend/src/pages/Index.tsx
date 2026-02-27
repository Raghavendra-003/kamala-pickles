import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import TraditionalSection from "@/components/TraditionalSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <TraditionalSection />
      <WhyChooseUs />
      <FeaturedProducts />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
