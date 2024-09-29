import Image from "next/image";
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

const Home = async () => {
  return (
    <>
      <main className="mx-auto flex min-h-screen w-screen flex-col items-center justify-center gap-14 bg-white py-32">
        <div className="sec flex flex-col justify-between lg:flex-row-reverse lg:justify-start">
          <Image
            width={400}
            height={400}
            src="/images/test.webp"
            alt="Mental Health Consultancy"
            className="shadow-custom rounded-ee-[50%] rounded-ss-[50%]"
          />

          <div className="flex flex-col items-center justify-center gap-4 lg:items-start">
            <h1 className="mt-6 text-center text-[2.5rem] font-bold leading-snug text-black lg:text-start lg:text-[4.5rem]">
              Healthy Minds, Happy Lives{" "}
              <span className="text-accent">Mental Health</span> Consultancy
            </h1>

            <p className="mt-4 text-center text-lg text-lite lg:text-start">
              Lorem ipsum dolor sit amet consectetur. Convallis est urna
              adipiscing fringilla nulla.
            </p>
            <button className="w-fit rounded-full bg-primary px-6 py-2 text-white hover:bg-green-700">
              Get Started
            </button>
          </div>
        </div>
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
        <PricingSection />
        <FaqSection />
      </main>
    </>
  );
};

export default Home;
