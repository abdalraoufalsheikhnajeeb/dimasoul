import CalenderEventCard from "@/app/components/CalenderEventCard";
import React from "react";

const page = () => {
  return (
    <>
      <section className="bg-primaryBG">
        <div className="mx-auto max-w-[90vw] px-4 py-8 text-center md:py-16 md:text-left lg:max-w-7xl">
          <div className="mt-16 md:flex md:items-center md:space-x-8">
            <div className="hidden bg-primary md:block md:h-full md:w-1"></div>
            <div className="container border-l-4 border-primary pl-6 md:w-1/2">
              <h2 className="mb-4 text-4xl font-bold text-primary">
                Calender Day Details
              </h2>
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
      <section className="container flex flex-col gap-10 py-10">
        <CalenderEventCard />
        <CalenderEventCard />
        <CalenderEventCard />
        <CalenderEventCard />
        <CalenderEventCard />
        <CalenderEventCard />
      </section>
    </>
  );
};

export default page;
