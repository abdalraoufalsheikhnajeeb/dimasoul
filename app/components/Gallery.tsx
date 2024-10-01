import Image from "next/image";
import { galleryImages } from "../data"; // Ensure this path is correct
import Link from "next/link";

const Gallery: React.FC = () => {
  return (
    <section className="container flex flex-col gap-6">
      {/* Heading */}
      <div className="flex w-full items-center justify-center lg:justify-between">
        <h2 className="text-3xl font-bold lg:text-2xl">Gallery</h2>

        <Link
          href="/"
          className="z-10 flex cursor-pointer items-center gap-2 font-bold text-primary"
        >
          <span>See More</span>
          <Image
            src="/images/Arrow - Left.svg"
            alt="arrow"
            width={0}
            height={0}
            className="h-10 w-10 2xl:h-12 2xl:w-12"
          />
        </Link>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {galleryImages.slice(0, 8).map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-xl">
            <Image
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={500} // You can adjust this value
              height={index % 2 === 0 ? 300 : 450} // Adjust height based on index for variation
              className="transform object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            {image.caption && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
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
