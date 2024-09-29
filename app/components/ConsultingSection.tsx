import Image from "next/image";

const ConsultingSection = async () => {
  return (
    <section className="w-screen bg-primaryBG">
      <div className="sec relative mx-auto flex flex-col items-center justify-center md:flex-row md:space-x-8">
        {/* Image Section */}
        <div className="flex w-full items-center justify-center md:mb-0 md:w-1/2">
          <Image
            src="/images/test.webp"
            alt="Mentor Image"
            width={400}
            height={700}
            className="lg:absolute lg:bottom-0 lg:left-8 lg:h-[125%]"
          />
        </div>

        {/* Text Section */}
        <div className="w-full rounded-lg bg-primaryBG p-8 md:w-1/2">
          <h4 className="text-lg font-bold text-primary">Mentor</h4>
          <h2 className="mt-2 text-3xl font-bold lg:text-5xl">
            Introducing Experienced Consulting
          </h2>

          {/* Icon and Text List */}
          <div className="mt-6 space-y-10">
            {/* Professional Growth */}
            <div className="flex items-start gap-4">
              <Image
                width={100}
                height={100}
                src="/images/test.webp"
                alt="clock"
                className=""
              />
              <div>
                <h3 className="text-xl font-semibold">Professional Growth</h3>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Convallis est urna
                  adipiscing fringilla nulla.
                </p>
              </div>
            </div>

            {/* Reduced Burnout */}
            <div className="flex items-start gap-4">
              <Image
                width={100}
                height={100}
                src="/images/test.webp"
                alt="clock"
                className=""
              />
              <div>
                <h3 className="text-xl font-semibold">Reduced Burnout</h3>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Convallis est urna
                  adipiscing fringilla nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;
