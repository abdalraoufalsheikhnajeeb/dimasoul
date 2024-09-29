import Image from "next/image";

const AboutSection = async () => {
  return (
    <section className="">
      <div className="sec mx-auto flex flex-col items-center md:flex-row md:space-x-8">
        {/* Image Section */}
        <div className="mb-8 w-full md:mb-0 md:w-1/2">
          <Image
            src="/images/test.webp"
            alt="Therapy Session"
            width={600}
            height={600}
            className="aspect-square rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full text-center md:w-1/2 md:text-left">
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
          <button className="mt-6 rounded-full bg-primary px-6 py-3 text-white hover:bg-green-700">
            See Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
