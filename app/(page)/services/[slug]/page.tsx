import { servicesContent } from "@/app/data";
import Image from "next/image";

interface ServiceDetailParams {
  params: {
    slug: string;
  };
}

const ServiceDetail = async ({ params }: ServiceDetailParams) => {
  const service = servicesContent.services.find(
    (service) => service.slug === params.slug,
  );

  if (!service) {
    return <div>Service not found.</div>;
  }

  return (
    <section>
      <section className="bg-primaryBG">
        <div className="container max-w-[90vw] px-4 py-8 text-center md:py-16 md:text-left lg:max-w-7xl">
          {/* Services Section */}
          <div className="mt-16 md:flex md:items-center md:space-x-8">
            {/* Vertical Line */}
            <div className="hidden bg-primary md:block md:h-full md:w-1"></div>

            {/* Services Text */}
            <div className="border-l-4 border-primary pl-6 md:w-1/2">
              <h2 className="mb-4 text-4xl font-bold text-primary">
                {service.title}
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                {service.headerDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="py-16">
        <div className="container">
          <Image
            src={service.heroImageSrc}
            alt={service.title}
            width={1200}
            height={500}
            className="h-auto w-full rounded-2xl object-cover shadow-md"
          />

          {/* Detailed Description */}
          <div className="container flex px-4 py-8 md:py-16">
            <p className="mx-auto w-1/2 max-w-2xl text-3xl">{service.title}</p>
            <p className="mx-auto w-1/2 max-w-2xl text-lg text-gray-700">
              {service.detailedDescription}
            </p>
          </div>

          {/* Method Cards */}
          <p className="text-3xl font-bold">{service.cardsTitle}</p>
          <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-1 md:py-16 lg:grid-cols-2">
            {service.methodCards.map((card, index) => (
              <div
                key={index}
                className="flex aspect-video flex-col items-center justify-center gap-4 rounded-2xl bg-white p-6 text-center shadow-lg"
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={150}
                  height={150}
                />
                <h4 className="mt-4 text-xl font-bold text-primary">
                  {card.title}
                </h4>
                <p className="mt-2 text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>

          {/* Video Section */}
          <div className="flex flex-col gap-6 py-8 text-center md:py-16">
            <video
              controls
              src={service.video.src}
              className="mx-auto w-full rounded-2xl shadow-md"
            />

            <h3 className="mb-4 text-3xl font-bold">{service.video.title}</h3>
            <p className="mb-6 text-gray-600">{service.video.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
