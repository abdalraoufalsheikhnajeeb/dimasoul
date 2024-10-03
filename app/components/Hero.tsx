import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero: React.FC = () => {
  return (
    <div className="container flex w-full flex-col justify-between pt-14 lg:flex-row-reverse lg:justify-start lg:pt-0">
      <div className="relative flex h-96 w-full items-start justify-end pr-6 pt-20 lg:w-1/2 xl:h-auto">
        <Image
          quality={60}
          src="/images/hero_img.webp"
          alt="Mental Health Consultancy"
          layout="fill"
          className="shadow-custom rounded-ee-[50%] rounded-ss-[50%] object-cover"
          unoptimized
        />
      </div>

      <div className="flex h-fit w-full flex-col items-center justify-start gap-4 pt-20 lg:w-1/2 lg:items-start">
        <h1 className="text-center text-[2.5rem] font-bold leading-snug text-black lg:text-start xl:text-[3rem] 2xl:text-[4.5rem]">
          Healthy Minds, Happy Lives{" "}
          <span className="text-accent">Mental Health</span> Consultancy
        </h1>

        <p className="mt-4 text-center text-lg text-lite lg:text-start">
          Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing
          fringilla nulla diam lorem non mauris. Ultrices aliquet at quam.
        </p>

        <Button title="Get Started" type="button" extraClassName="font-bold" />
      </div>
    </div>
  );
};

export default Hero;
