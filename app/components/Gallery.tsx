import Image from "next/image";
import { galleryImages } from "../data";
import Link from "next/link";

const Gallery = async () => {
  return (
    <section className="sec flex flex-col gap-6">
      {/* Heading */}
      <div className="flex items-center justify-center lg:justify-between">
        <h2 className="text-3xl font-bold lg:text-2xl">Gallery</h2>

        <Link href="gallery" className="hidden text-green-600 hover:underline lg:block">
          See More <span className="">&rarr;</span>
        </Link>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {galleryImages.slice(0, 8).map((image, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-lg ${index === 0 ? "md:col-span-1 md:row-span-3" : ""} ${index === 1 ? "md:col-span-2 md:row-span-1" : ""} ${index === 2 ? "md:col-span-1 md:row-span-1" : ""} ${index === 3 ? "md:col-span-2 md:row-span-2" : ""} ${index === 4 ? "md:col-span-1 md:row-span-2" : ""} ${index === 5 ? "md:col-span-2 md:row-span-1" : ""} ${index === 6 ? "md:col-span-1 md:row-span-1" : ""} ${index === 7 ? "md:col-span-1 md:row-span-1" : ""}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={500}
              height={300}
              className="transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            {image.caption && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-lg text-white">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
