import Image from "next/image";
import { featuresData } from "../data";

const Features = async () => {
  return (
    <section className="sec flex flex-col items-center">
      {/* Header */}

      <h4 className="text-lg font-bold text-primary">Why Choose Us?</h4>
      <h2 className="mt-2 max-w-xl text-center text-4xl font-bold">
        Why Our Mental Health Consultants are the Best Choice
      </h2>

      {/* Features Grid */}
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center rounded-2xl bg-gray-50 p-6 text-center"
          >
            <div className="mb-4">
              <Image
                src={feature.imageSrc}
                alt={feature.altText}
                width={200}
                height={200}
                className="h-16 w-16 rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
