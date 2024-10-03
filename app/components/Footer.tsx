import Image from "next/image";
import { footerData } from "../data";
import Link from "next/link";

const Footer = async () => {
  return (
    <footer
      className="relative bg-primary bg-cover bg-center py-12 text-white"
      style={{ backgroundImage: "url('/images/texture.svg')" }}
    >
      <div className="container">
        <div className="flex h-full flex-col items-start lg:justify-between md:flex-row">
          <div className="flex w-full  flex-col items-center p-8 lg:p-2 lg:items-start justify-center md:w-1/4">
            <Image
              quality={60}
              width={200}
              height={400}
              src={"/images/logo-name.png"}
              alt="x"
            />
            <p className="mt-4 text-gray-300 text-center lg:text-start">{footerData.logo.description}</p>
            <div className="hidden my-6 w-16 border-t border-white lg:flex"></div>

            {/* Social Icons */}
            <div className="mt-4 hidden w-full flex-col justify-center space-x-6 lg:flex">
              {footerData.logo.socialLinks.map((social, index) => (
                <a key={index} href={social.href} aria-label={social.label}>
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="hidden w-full flex-col justify-center md:w-1/4 lg:flex">
            <h5 className="text-xl font-semibold text-secondary">
              {footerData.services.title}
            </h5>
            <ul className="mt-4 space-y-2 text-gray-300">
              {footerData.services.items.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="hidden flex-col justify-center md:w-1/4 lg:flex">
            <h5 className="text-xl font-semibold text-secondary">
              {footerData.contact.title}
            </h5>
            <ul className="mt-4 space-y-2 text-customWhite">
              {footerData.contact.details.map((detail, index) => (
                <li className="flex items-center gap-3" key={index}>
                  <Image
                    quality={60}
                    width={20}
                    height={20}
                    src={detail.icon}
                    alt="x"
                  />
                  {detail.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="hidden w-full  md:w-1/4 lg:flex flex-co">
            <h5 className="text-xl font-semibold text-secondary">
              {footerData.links.title}
            </h5>
            <ul className="mt-4 space-y-2 text-gray-300">
              {footerData.links.items.map((link, index) => (
                <li key={index}>
                  <Link href={`/`}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white pt-6 text-center">
          {/* Footer Bottom */}
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex gap-4">
              <Link href="#">
                <Image
                  quality={60}
                  width={101}
                  height={101}
                  src={"/images/in.svg"}
                  alt="social_icon"
                  className="h-6 w-6 2xl:h-8 2xl:w-8"
                />
              </Link>
              <Link href="#">
                <Image
                  quality={60}
                  width={101}
                  height={101}
                  src={"/images/face.svg"}
                  alt="social_icon"
                  className="h-6 w-6 2xl:h-8 2xl:w-8"
                />
              </Link>
              <Link href="#">
                <Image
                  quality={60}
                  width={101}
                  height={101}
                  src={"/images/insta.svg"}
                  alt="social_icon"
                  className="h-6 w-6 2xl:h-8 2xl:w-8"
                />
              </Link>
              <Link href="#">
                <Image
                  quality={60}
                  width={101}
                  height={101}
                  src={"/images/whats.svg"}
                  alt="social_icon"
                  className="h-6 w-6 2xl:h-8 2xl:w-8"
                />
              </Link>
            </div>

            <p className="text-gray-300">{footerData.logo.email}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
