import { galleryImages } from "@/app/data";
import Image from "next/image";

const page = async () => {
  return (
    <div>
      <section className="bg-primaryBG">
        <div className="mx-auto max-w-[90vw] px-4 py-24 text-center md:py-16 md:text-left lg:max-w-7xl">
          <div className="mt-16 md:flex md:items-center md:space-x-8">
            <div className="hidden bg-primary md:block md:h-full md:w-1"></div>

            <div className="border-primary pl-6 md:w-1/2 md:border-l-4">
              <h2 className="mb-4 text-4xl font-bold text-primary">Gallery</h2>
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

      {/* Image Gallery Section */}
      <div className="py-10">
        <div className="container grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl transition-all duration-300 ease-in-out hover:shadow-lg ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              } ${index === 1 ? "md:col-span-1 md:row-span-1" : ""} ${
                index === 2 ? "md:col-span-1 md:row-span-2" : ""
              } ${index === 3 ? "md:col-span-2 md:row-span-1" : ""}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={0}
                height={0}
                unoptimized
                className="h-full w-full transform object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              {image.caption && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-lg text-white">{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
