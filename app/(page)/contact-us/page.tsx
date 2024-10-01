import {
  contactInfo,
  mapInfo,
} from "@/app/data";
import Image from "next/image";

const page = async () => {
  return (
    <div>
      <section className="bg-primaryBG">
        <div className="mx-auto max-w-[90vw] px-4 py-8 text-center md:py-16 md:text-left lg:max-w-7xl">
          {/* Services Section */}
          <div className="mt-16 md:flex md:items-center md:space-x-8">
            {/* Vertical Line */}
            <div className="hidden bg-primary md:block md:h-full md:w-1"></div>

            {/* Services Text */}
            <div className="border-l-4 border-primary pl-6 md:w-1/2">
              <h2 className="mb-4 text-4xl font-bold text-primary">
                Contact Us{" "}
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

      <section className="sec mx-auto gap-4 px-4 md:flex md:items-start md:justify-between">
        {/* Contact Information */}
        <div className="mb-8 md:mb-0 md:w-1/2">
          <h3 className="mb-4 text-lg font-semibold text-primary">
            {contactInfo.subtitle}
          </h3>
          <h2 className="mb-6 text-3xl font-bold">{contactInfo.title}</h2>
          <p className="mb-8 text-gray-600">{contactInfo.description}</p>

          {/* Contact Details */}
          <div className="space-y-6">
            {contactInfo.contactDetails.map((detail) => (
              <div key={detail.id} className="flex items-start gap-4">
                <Image
                  src={detail.icon}
                  alt={detail.label}
                  width={40}
                  height={40}
                />
                <div>
                  <h4 className="text-lg font-semibold">{detail.label}</h4>
                  <p className="text-gray-600">{detail.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-xl bg-primaryBG p-8 md:w-1/2">
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="mb-2 block text-lg font-semibold"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder={contactInfo.form.namePlaceholder}
                className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-2 block text-lg font-semibold"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder={contactInfo.form.emailPlaceholder}
                className="w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-lg font-semibold"
              >
                Your Message
              </label>
              <textarea
                id="message"
                placeholder={contactInfo.form.messagePlaceholder}
                className="h-40 w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="hover:bg-primary-dark w-full rounded-xl bg-primary py-3 font-semibold text-white"
            >
              {contactInfo.form.buttonText}
            </button>
          </form>
        </div>
      </section>

      <section className="sec px-4">
        {/* Section Header */}
        <h3 className="mb-2 text-lg font-semibold text-primary">
          {mapInfo.subtitle}
        </h3>
        <h2 className="mb-8 text-3xl font-bold">{mapInfo.title}</h2>

        {/* Map Embed */}
        <div className="relative h-96 w-full overflow-hidden rounded-xl shadow-lg">
          <iframe
            src={mapInfo.mapEmbedUrl}
            width="100%"
            height="100%"
            allowFullScreen={true}
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </section>
    </div>
  );
};
export default page;
