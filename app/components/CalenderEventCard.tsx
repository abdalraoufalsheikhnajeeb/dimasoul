import Image from "next/image";
import React from "react";
import Button from "./Button";

const CalenderEventCard = () => {
  return (
    <article className="flex w-full items-center gap-6">
      <div className="w-full lg:w-2/5">
        <Image
          quality={60}
          src="/images/latest_girl_img.webp"
          alt="event"
          width={101}
          height={101}
          className="h-full w-full rounded-xl"
        />
      </div>
      <div className="w-full lg:w-3/5">
        <h1 className="font-bold text-black underline lg:text-3xl 2xl:text-5xl">
          Interactive therapy
        </h1>
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold text-black 2xl:text-3xl">
            Monday ,Agust , 1
          </p>
          <p className="text-2xl font-bold text-black 2xl:text-3xl">
            10:00 - 12:00 AM
          </p>
          <p className="text-sm text-lite 2xl:text-lg">
            Lorem ipsum dolor sit amet consectetur. Convallis est urna
            adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet
            at quam adipiscing feugiat interdum mattis. Placerat donec risus
            diam sed et. A in ullamcorper ipsum justo vestibulum sit cursus.
          </p>
        </div>
        <Button title="book your appointment" extraClassName="mt-10" />
      </div>
    </article>
  );
};

export default CalenderEventCard;
