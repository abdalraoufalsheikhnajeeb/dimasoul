"use client";
import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect } from "react";
import { testimonials } from "../data";

export default function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () =>
        setSelectedIndex(emblaApi.selectedScrollSnap()),
      );
    }
  }, [emblaApi]);

  return (
    <section className="lg:sec p-6 flex flex-col items-center justify-between bg-primaryBG py-16 pe-8 lg:flex-row">
      {/* Section Header */}
      <div className="pr-8">
        <h3 className="mb-2 text-lg font-semibold text-primary">
          Testimonials
        </h3>
        <h2 className="mb-8 text-4xl font-bold leading-snug">
          Healing Words Testimonials from a Mental Health Consultant
        </h2>
      </div>

      {/* Embla Carousel */}
      <div className="relative w-96 overflow-hidden">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="embla__slide p-4">
                <div className="w-80 rounded-xl bg-white p-6 text-center shadow-lg">
                  <div className="mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="mx-auto rounded-full"
                    />
                  </div>
                  <p className="mb-4 text-gray-600">{testimonial.message}</p>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="hover:bg-primary-dark absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-primary p-3 text-white transition duration-300"
        >
          &#8249;
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="hover:bg-primary-dark absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-primary p-3 text-white transition duration-300"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
}
