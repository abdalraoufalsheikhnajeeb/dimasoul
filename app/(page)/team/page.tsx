import Image from "next/image";
import { teamMembers } from "@/app/data";

const page = () => {
  return (
    <div>
      <section className="bg-primaryBG">
        <div className="mx-auto max-w-[90vw] px-4 py-24 text-center md:py-16 md:text-left lg:max-w-7xl">
          {/* Services Section */}
          <div className="mt-16 md:flex md:items-center md:space-x-8">
            {/* Vertical Line */}
            <div className="hidden bg-primary md:block md:h-full md:w-1"></div>

            {/* Services Text */}
            <div className="border-primary pl-6 md:w-1/2 md:border-l-4">
              <h2 className="mb-4 text-4xl font-bold text-primary">Team</h2>
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
      <div className="container my-8 flex w-full flex-col gap-4 px-4 lg:flex-row">
        <p className="mx-auto w-full max-w-2xl text-3xl font-bold lg:w-1/2">
          Caring for Your Mental Health Get to Know Our Team of Experts
        </p>
        <p className="mx-auto w-full max-w-2xl text-sm text-gray-700 lg:w-1/2">
          Lorem ipsum dolor sit am et consectetur. Convallis est urna adipiscing
          fringilla nulla diam lorem non mauris. Ultrices aliquet at quam
          adipiscing.
        </p>
      </div>
      {/* Team Grid */}
      <section className="container grid grid-cols-1 gap-4 py-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-xl shadow-lg`}
          >
            <Image
              quality={60}
              src={member.image}
              alt={member.title}
              layout="responsive"
              width={300}
              height={400}
              className="transform transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            {member.caption && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-lg text-white">{member.caption}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default page;
