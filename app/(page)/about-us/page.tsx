import TeamSection from "@/app/components/TeamSection";
import {
  AboutUSsectionDetails,
  successStoryContent,
  teamContent,
  welcomeMessageContent,
} from "@/app/data";
import Image from "next/image";

const AboutUsSection = async () => {
  return (
    <>
      <section className="bg-primaryBG">
        <div className="mx-auto max-w-[90vw] px-4 py-24 text-center md:py-16 md:text-left lg:max-w-7xl">
          <div className="mt-16 md:flex md:items-center md:space-x-8">
            <div className="hidden bg-primary md:block md:h-full md:w-1"></div>
            <div className="container border-primary pl-6 md:w-1/2 md:border-l-4">
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
      <div className="container 2xl:py-[7.5rem]">
        <section className="flex flex-col items-center pt-10 md:flex md:space-x-8 lg:flex-row lg:items-start">
          <div className="flex w-full flex-col gap-10 md:w-2/5">
            <div className="flex flex-col gap-5">
              <h2 className="text-center text-xl font-bold text-primary md:text-start md:text-2xl">
                About Us
              </h2>
              <h3 className="text-center text-2xl font-bold text-black md:text-start md:text-4xl">
                Transforming Lives Through Care
              </h3>
            </div>
            <Image
              quality={60}
              src="/images/about_lake_image.webp"
              alt="Image"
              width={101}
              height={101}
              className="h-64 w-full rounded-xl object-cover"
              unoptimized
            />
          </div>

          {/* Text Section */}
          <div className="mt-4 w-full md:w-3/5">
            <div className="rounded-xl bg-primaryLight px-6 py-4">
              <h4 className="tex-start text-xl font-bold text-primary">
                Our Mission
              </h4>
            </div>

            {/* Section Cards */}
            <div className="mt-8 space-y-6">
              {AboutUSsectionDetails.map((section) => (
                <div
                  key={section.id}
                  className="flex flex-col gap-4 text-center md:text-left"
                >
                  <h5 className="text-xl font-bold text-black">
                    {section.title}
                  </h5>
                  <p className="text-sm text-lite">{section.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-white py-8 md:py-16">
          {/* Leaf Image under the section */}
          <Image
            quality={60}
            src="/images/bold_leaf.svg"
            alt="leaf"
            width={101}
            height={101}
            className="absolute -top-10 right-0 z-0 h-96 w-96"
          />

          <div className="relative z-10 gap-10 px-4 md:flex md:items-center">
            {/* Image Section */}
            <div className="w-full md:mb-0 md:w-2/6">
              <Image
                quality={60}
                src="/images/about_brain.webp"
                alt="Mental Health Journey"
                width={101}
                height={101}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="z-10 w-full md:w-4/6">
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

        {/* <section className="bg-white py-8 md:py-16">
          <div className="mx-auto px-4 md:flex md:items-center md:space-x-8">
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

            <div className="grid w-full grid-cols-2 gap-4 md:w-1/2">
              {teamContent.images.map((image) => (
                <div key={image.id} className="w-full">
                  <Image
          quality={60}
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
        </section> */}
        <div className="relative">
          <TeamSection />
          <Image
            quality={60}
            src="/images/rotated_leaf.svg"
            alt="leaf"
            width={101}
            height={101}
            className="absolute -bottom-10 left-1/3 z-0 h-32 w-32"
          />
        </div>
        <section className="bg-white py-8 md:py-16">
          <div className="gap-10 px-4 md:flex md:items-center md:space-x-8">
            {/* Image Section */}
            <div className="w-full md:mb-0 md:w-2/5">
              <Image
                quality={60}
                src={successStoryContent.imageSrc}
                alt={successStoryContent.imageAlt}
                width={101}
                height={101}
                className="h-[35vw] w-full rounded-xl object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="mt-4 w-full md:w-3/5">
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
                    <Image
                      quality={60}
                      src={"/images/Arrow - Left 2.svg"}
                      alt={successStoryContent.imageAlt}
                      width={101}
                      height={101}
                      className="w-10 rounded-xl object-cover"
                    />
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
