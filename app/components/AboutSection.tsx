import Image from "next/image";
import Button from "./Button";

const AboutSection = async () => {
  return (
    <section className="container relative">
      <Image
        quality={60}
        src="/images/home_about_vector.svg"
        alt="vector"
        className="absolute left-0 z-0 h-full w-fit"
        width={101}
        height={101}
      />
      <div className="z-10 flex flex-col items-center md:flex-row md:space-x-8">
        <div className="mb-8 w-full md:mb-0 md:w-1/2">
          <Image
            quality={60}
            src="/images/home_about_img.webp"
            alt="Therapy Session"
            width={101}
            height={101}
            className="aspect-square h-full w-full rounded-xl object-cover"
            unoptimized
          />
        </div>

        <div className="flex w-full flex-col gap-8 px-10 text-center md:w-1/2 md:text-left">
          <h4 className="text-lg font-bold text-primary">About Us</h4>
          <h2 className="mt-2 text-4xl font-bold">
            Discover the Faces Behind Our Mental Health Consultancy
          </h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Convallis est urna
            adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet
            et quam adipiscing feugiat interdum mattis. Placarat donec risus
            diam sed et. A in ullamcorper ipsum justo vestibulum sit cursus A
            risus donec eget enim.
          </p>
          {/* <button className="mt-6 rounded-full bg-primary px-6 py-3 text-white hover:bg-green-700">
            See Details
          </button> */}
          <Button title="See Details" extraClassName="w-fit" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
