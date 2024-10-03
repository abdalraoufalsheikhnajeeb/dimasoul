"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { servicesImages } from "../data";

const ServicesCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start", // Aligns the first image to the start of the carousel
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      console.log("Current slide index:", emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section className="container">
      <div className="flex flex-col items-center justify-center text-center">
        <h4 className="text-lg font-bold text-primary">Services</h4>
        <h2 className="max-w-2xl text-3xl font-bold">
          Empowering Minds Our Mental Health Consulting Services
        </h2>
      </div>

      <div className="relative mt-8 px-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {servicesImages.map((image, index) => (
              <div
                className="sm:1/2 relative w-full flex-shrink-0 p-2 md:w-1/3 lg:w-1/4" // Responsive widths for different screen sizes
                key={index}
              >
                <Image
                  quality={60}
                  src={image.src}
                  alt={image.alt}
                  width={101}
                  height={101}
                  className="aspect-[3/4] w-full rounded-xl object-cover transition-transform duration-300 hover:scale-105"
                  unoptimized
                />
                {/* Overlay for hover */}
                <div className="absolute inset-2 flex flex-col items-center justify-center rounded-xl bg-black bg-opacity-50 p-4 opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <h3 className="mb-2 text-center text-2xl font-semibold text-white">
                    {image.title}
                  </h3>
                  <p className="mb-4 text-center text-sm text-white">
                    {image.description}
                  </p>
                  <button className="rounded-md bg-primary px-6 py-2 text-white">
                    See More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={scrollPrev}
          className="absolute -left-4 top-1/2 -translate-y-1/2 transform rounded-full p-2 text-3xl font-bold text-primary hover:bg-primaryBG focus:outline-none"
        >
          ←
        </button>
        <button
          onClick={scrollNext}
          className="absolute -right-4 top-1/2 -translate-y-1/2 transform rounded-full p-2 text-3xl font-bold text-primary hover:bg-primaryBG focus:outline-none"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default ServicesCarousel;
