import { pricingPlans } from "../data";
import PricingCard from "./PricingCard";

const PricingSection = async () => {
  return (
    <section className="container z-20">
      <div className="flex flex-col gap-6 text-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <h4 className="text-lg font-bold text-primary">Pricing Plans</h4>
          <h2 className="text-3xl font-bold">Affordable Care Packages</h2>
          <p className="max-w-2xl text-lightGray">
            Lorem ipsum dolor sit amet consectetur. Convallis est urna
            adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet
            at quam adipiscing.
          </p>
        </div>

        <div className="z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
