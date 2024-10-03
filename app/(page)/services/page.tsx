import Button from "@/app/components/Button";
import { servicesContent } from "@/app/data";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  return (
    <div>
      <section className="bg-primaryBG">
        <div className="container max-w-[90vw] px-4 py-8 text-center md:py-16 md:text-left lg:max-w-7xl">
          {/* Services Section */}
          <div className="mt-16 md:flex md:items-center md:space-x-8">
            {/* Vertical Line */}
            <div className="hidden bg-primary md:block md:h-full md:w-1"></div>

            {/* Services Text */}
            <div className="border-l-4 border-primary pl-6 md:w-1/2">
              <h2 className="mb-4 text-4xl font-bold text-primary">Services</h2>
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

      <section className="container bg-white py-8 md:py-16">
        <div className="flex flex-col gap-8 text-center">
          {/* Section Title */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-primary md:text-xl">
              {servicesContent.title}
            </h3>
            <h2 className="w-full px-8 text-center text-2xl font-bold md:text-4xl">
              {servicesContent.subtitle}
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {servicesContent.services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                passHref
              >
                <div className="group relative cursor-pointer">
                  <Image
                    src={service.cardImageSrc}
                    alt={service.title}
                    width={200}
                    height={300}
                    className="aspect-[6/8] w-full rounded-2xl object-cover"
                  />

                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-black bg-opacity-50 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="mb-2 text-lg font-bold md:text-xl">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-sm">{service.description}</p>
                    <Button title="See More" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default page;
