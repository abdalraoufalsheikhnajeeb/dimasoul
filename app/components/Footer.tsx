import Image from "next/image";
import { footerData } from "../data";
import Link from "next/link";

const Footer = async () => {
  return (
    <footer className="relative bg-green-900 py-12 text-white">
      <Image
        width={1280}
        height={780}
        src={"/images/texture.svg"}
        alt="x"
        className="absolute -top-16 h-full w-full"
      />
      <div className="sec mx-auto px-4">
        <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
          {/* Logo and Description */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <Image
              width={200}
              height={400}
              src={"/images/logo-name.png"}
              alt="x"
            />

            <p className="mt-4 text-gray-300">{footerData.logo.description}</p>
            <div className="my-6 w-16 border-t border-white"></div>

            {/* Social Icons */}
            <div className="mt-4 flex space-x-6">
              {footerData.logo.socialLinks.map((social, index) => (
                <a key={index} href={social.href} aria-label={social.label}>
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
            <p className="mt-4 text-gray-300">{footerData.logo.email}</p>
          </div>

          {/* Services */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h5 className="text-xl font-semibold text-orange-400">
              {footerData.services.title}
            </h5>
            <ul className="mt-4 space-y-2 text-gray-300">
              {footerData.services.items.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h5 className="text-xl font-semibold text-orange-400">
              {footerData.contact.title}
            </h5>
            <ul className="mt-4 space-y-2 text-gray-300">
              {footerData.contact.details.map((detail, index) => (
                <li key={index}>
                  {detail.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h5 className="text-xl font-semibold text-orange-400">
              {footerData.links.title}
            </h5>
            <ul className="mt-4 space-y-2 text-gray-300">
              {footerData.links.items.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white pt-6 text-center">
          {/* Footer Bottom */}
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex gap-4">
              <Link href="#">
                {" "}
                <Image
                  width={50}
                  height={50}
                  src={"/images/in.svg"}
                  alt="x"
                />{" "}
              </Link>
              <Link href="#">
                {" "}
                <Image
                  width={50}
                  height={50}
                  src={"/images/face.svg"}
                  alt="x"
                />{" "}
              </Link>
              <Link href="#">
                {" "}
                <Image
                  width={50}
                  height={50}
                  src={"/images/insta.svg"}
                  alt="x"
                />{" "}
              </Link>
              <Link href="#">
                {" "}
                <Image
                  width={50}
                  height={50}
                  src={"/images/whats.svg"}
                  alt="x"
                />{" "}
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
