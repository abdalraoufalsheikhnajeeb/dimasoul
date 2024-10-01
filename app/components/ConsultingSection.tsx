import Image from "next/image";

const ConsultingSection = async () => {
  return (
    <section className="w-full bg-primaryBG">
      <div className="container relative mx-auto flex flex-col items-center justify-center md:flex-row md:space-x-8">
        <div className="relative flex h-full w-full items-center justify-center md:w-1/2">
          <Image
            src="/images/home_pride_image.webp"
            alt="Mentor Image"
            width={0}
            height={0}
            className="relative -top-6 h-2/3 w-full object-cover"
            unoptimized
          />
        </div>

        {/* Text Section */}
        <div className="w-full rounded-xl bg-primaryBG p-8 md:w-1/2">
          <h4 className="text-lg font-bold text-primary">Mentor</h4>
          <h2 className="mt-2 text-3xl font-bold 2xl:text-5xl">
            Introducing Experienced Consulting
          </h2>

          {/* Icon and Text List */}
          <div className="mt-6 space-y-10">
            {/* Professional Growth */}
            <div className="flex items-start gap-4">
              <Image
                width={100}
                height={100}
                src="/images/Growth.svg"
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
                src="/images/Burnout.svg"
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
