import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoupleSection from "@/components/CoupleSection";
import StorySection from "@/components/StorySection";
import GallerySection from "@/components/GallerySection";
import WeddingPartySection from "@/components/WeddingPartySection";
import EventsSection from "@/components/EventsSection";
import WeddingNewsSection from "@/components/WeddingNewsSection";
import WeddingDuaSection from "@/components/WeddingDuaSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CoupleSection />
      <StorySection />
      <GallerySection />
      <WeddingPartySection />
      <EventsSection />
      <WeddingNewsSection />
      <WeddingDuaSection />
    </div>
  );
};

export default Index;
