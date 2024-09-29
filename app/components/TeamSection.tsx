import Image from "next/image";
import { teamImages } from "../data";

const TeamSection = async () => {
  return (
    <section className="py-16">
      <div className="sec mx-auto flex flex-col items-center md:flex-row md:space-x-8">
        {/* Text Section */}
        <div className="mb-8 w-full text-center md:mb-0 md:w-1/2 md:text-left">
          <h4 className="text-lg font-bold text-primary">Team</h4>
          <h2 className="mt-2 text-3xl font-bold">
            Caring for Your Mental Health
            <br />
            Get to Know Our Team of Experts
          </h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Convallis est urna
            adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet
            at quam adipiscing.
          </p>
          <button className="mt-6 rounded-full bg-primary px-6 py-3 text-white hover:bg-green-700">
            See More
          </button>
        </div>

        {/* Images Section */}
        <div className="grid w-full grid-cols-2 gap-4 md:w-1/2">
          {/* Large Image */}
          <div className="col-span-2 row-span-2 md:col-span-1 md:row-span-2">
            <Image
              src={teamImages[0].src}
              alt={teamImages[0].alt}
              width={600}
              height={400}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>

          {/* Small Images */}
          <div className="col-span-1">
            <Image
              src={teamImages[1].src}
              alt={teamImages[1].alt}
              width={300}
              height={200}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
          <div className="col-span-1">
            <Image
              src={teamImages[2].src}
              alt={teamImages[2].alt}
              width={300}
              height={200}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
