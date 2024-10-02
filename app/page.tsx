import Statistics from "./components/Statistics";
import Features from "./components/Features";
import AboutSection from "./components/AboutSection";
import ConsultingSection from "./components/ConsultingSection";
import TeamSection from "./components/TeamSection";
import ServicesCarousel from "./components/ServicesCarousel";
import QuoteSection from "./components/QuoteSection";
import Gallery from "./components/Gallery";
import BlogSection from "./components/BlogSection";
import PricingSection from "./components/PricingSection";
import FaqSection from "./components/FaqSection";
import Appointments from "./components/Appointments";
import TestimonialSection from "./components/TestimonialSection";
import NewsletterSection from "./components/NewsletterSection";
import Hero from "./components/Hero";
import Image from "next/image";

const Home = async () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center gap-20 bg-white py-32 xl:gap-[5rem] 2xl:gap-[7rem]">
        <Hero />
        <Statistics />
        <Appointments />
        <Features />
        <AboutSection />
        <ServicesCarousel />
        <ConsultingSection />
        <TeamSection />
        <QuoteSection />
        <Gallery />
        <BlogSection />
        <div className="relative w-full">
          <Image
            src="/images/left_leaf.svg"
            alt="leaf"
            width={0}
            height={0}
            className="absolute bottom-0 left-0 z-0 hidden w-2/3 lg:block"
          />
          <PricingSection />
          <TestimonialSection />
        </div>
        <NewsletterSection />
        <FaqSection />
      </main>
    </>
  );
};

export default Home;
