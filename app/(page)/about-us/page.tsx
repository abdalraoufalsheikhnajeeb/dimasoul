import {
  AboutUSsectionDetails,
  successStoryContent,
  teamContent,
  welcomeMessageContent,
} from "@/app/data";
import Image from "next/image";
// import PlayIcon from "../../../public/images/playIcon.svg";
const AboutUsSection = async () => {
  return (
    <>
      <section className="bg-primaryBG">
        <div className="mx-auto max-w-[90vw] px-4 py-8 text-center md:py-16 md:text-left lg:max-w-7xl">
          {/* About Us Section */}
          <div className="mt-16 md:flex md:items-center md:space-x-8">
            {/* Vertical Line */}
            <div className="hidden bg-primary md:block md:h-full md:w-1"></div>

            {/* About Us Text */}
            <div className="border-l-4 border-primary pl-6 md:w-1/2">
              <h2 className="mb-4 text-4xl font-bold text-primary">About Us</h2>
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
      <div className="container">
        <section className="flex flex-col items-center md:flex md:space-x-8 lg:flex-row lg:items-start">
          {/* Image Section */}
          <div className="mb-8 w-full md:mb-0 md:w-1/2">
            <h2 className="mb-4 text-center text-xl font-bold text-primary md:text-2xl">
              About Us
            </h2>
            <h3 className="mb-8 text-center text-2xl font-bold md:text-4xl">
              Transforming Lives Through Care
            </h3>
            <Image
              src="/images/test.webp"
              alt="Image"
              width={700}
              height={400}
              className="rounded-xl"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <div className="rounded-xl bg-accentBG p-4 text-center">
              <h4 className="mb-2 text-xl font-bold text-primary">
                Our Mission
              </h4>
            </div>

            {/* Section Cards */}
            <div className="mt-8 space-y-6">
              {AboutUSsectionDetails.map((section) => (
                <div key={section.id} className="text-center md:text-left">
                  <h5 className="mb-2 text-xl font-bold">{section.title}</h5>
                  <p className="text-lite">{section.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-8 md:py-16">
          <div className="mx-auto px-4 md:flex md:items-center md:space-x-8">
            {/* Image Section */}
            <div className="mb-8 w-full md:mb-0 md:w-1/2">
              <Image
                src="/images/test.webp" // Placeholder image path
                alt="Mental Health Journey"
                width={700}
                height={400}
                className="rounded-xl"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2">
              <h3 className="mb-2 text-lg font-semibold text-primary md:text-xl">
                Welcome Message
              </h3>
              <h2 className="mb-4 text-2xl font-bold md:text-4xl">
                Start Your Mental Health Journey <br /> Here A Warm Welcome to
                Our Consultancy
              </h2>

              {/* Dynamic Paragraphs */}
              {welcomeMessageContent.welcomeText.map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed text-gray-600">
                  {paragraph}
                </p>
              ))}

              {/* Author Section */}
              <p className="font-bold">{welcomeMessageContent.author}</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-8 md:py-16">
          <div className="mx-auto px-4 md:flex md:items-center md:space-x-8">
            {/* Text Section */}
            <div className="mb-8 w-full md:mb-0 md:w-1/2">
              <h3 className="mb-2 text-lg font-semibold text-primary md:text-xl">
                {teamContent.title}
              </h3>
              <h2 className="mb-4 text-2xl font-bold md:text-4xl">
                {teamContent.subtitle} <br /> {teamContent.description}
              </h2>
              <p className="mb-4 leading-relaxed text-gray-600">
                {teamContent.paragraph}
              </p>
              <button className="hover:bg-primary-dark rounded-xl bg-primary px-6 py-2 font-bold text-white">
                {teamContent.buttonText}
              </button>
            </div>

            {/* Image Section */}
            <div className="grid w-full grid-cols-2 gap-4 md:w-1/2">
              {teamContent.images.map((image) => (
                <div key={image.id} className="w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={200}
                    className="rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-8 md:py-16">
          <div className="mx-auto px-4 md:flex md:items-center md:space-x-8">
            {/* Image Section */}
            <div className="mb-8 w-full md:mb-0 md:w-1/2">
              <Image
                src={successStoryContent.imageSrc}
                alt={successStoryContent.imageAlt}
                width={700}
                height={400}
                className="rounded-xl"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2">
              <h3 className="mb-2 text-lg font-semibold text-primary md:text-xl">
                {successStoryContent.title}
              </h3>
              <h2 className="mb-4 text-2xl font-bold md:text-4xl">
                {successStoryContent.headline}
              </h2>

              {/* Story Items */}
              <div className="space-y-4">
                {successStoryContent.storyItems.map((item) => (
                  <div key={item.id} className="flex items-center">
                    {/* <PlayIcon className="mr-4 h-6 w-6 text-yellow-500" /> */}
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUsSection;
