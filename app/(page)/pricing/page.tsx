import PricingSection from "@/app/components/PricingSection";

const page = async () => {
  return (
    <div className="">
      <section className="bg-primaryBG">
        <div className="mx-auto max-w-[90vw] px-4 py-24 text-center md:py-16 md:text-left lg:max-w-7xl">
          {/* Services Section */}
          <div className="mt-16 md:flex md:items-center md:space-x-8">
            {/* Vertical Line */}
            <div className="hidden bg-primary md:block md:h-full md:w-1"></div>

            {/* Services Text */}
            <div className="border-primary pl-6 md:w-1/2 md:border-l-4">
              <h2 className="mb-4 text-4xl font-bold text-primary">Pricing</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Convallis est urna
                adipiscing fringilla nulla diam lorem non mauris. Ultrices
                aliquet at quam adipiscing feugiat interdum mattis. Placerat
                donec risus diam sed et. A in ullamcorper ipsum.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="py-10">
        <PricingSection />
      </div>
    </div>
  );
};
export default page;
