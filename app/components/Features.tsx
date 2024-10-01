import { featuresData } from "../data";
import WhyUsCard from "./WhyUsCard";

const Features = async () => {
  return (
    <section className="container flex flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center gap-3">
        <h4 className="text-lg font-bold text-primary 2xl:text-2xl">
          Why Choose Us?
        </h4>
        <h2 className="px- max-w-2xl text-center text-4xl font-bold">
          Why Our Mental Health Consultants are the Best Choice
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        {featuresData.map((feature, index: number) => (
          <WhyUsCard {...feature} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Features;
