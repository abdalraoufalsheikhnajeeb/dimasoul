"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick"; // Import React Slick
import { testimonials } from "../data";
import TestimonialsCard from "./TestimonialsCard";

export default function TestimonialSection() {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="container flex flex-col items-center justify-between p-6 py-16 pe-8 lg:flex-row">
      <div className="w-full lg:w-1/2">
        <h3 className="mb-2 text-lg font-semibold text-primary">
          Testimonials
        </h3>
        <h2 className="mb-8 text-4xl font-bold leading-snug">
          Healing Words Testimonials from a Mental Health Consultant
        </h2>
      </div>

      <div className="relative w-full lg:w-1/2">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <TestimonialsCard key={testimonial.id} {...testimonial} />
          ))}
        </Slider>

        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full p-2 text-green-500 transition duration-300 hover:text-green-700"
          aria-label="Previous"
          onClick={() => {
            const prevButton = document.querySelector(
              ".slick-prev",
            ) as HTMLElement;
            prevButton?.click();
          }}
        >
          <Image
            quality={60}
            src="/images/Arrow - Right.svg"
            alt="arrow"
            width={20}
            height={20}
          />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full p-2 text-green-500 transition duration-300 hover:text-green-700"
          aria-label="Next"
          onClick={() => {
            const nextButton = document.querySelector(
              ".slick-next",
            ) as HTMLElement;
            nextButton?.click();
          }}
        >
          <Image
            quality={60}
            src="/images/Arrow - Left.svg"
            alt="arrow"
            width={20}
            height={20}
          />
        </button>
      </div>
    </section>
  );
}
