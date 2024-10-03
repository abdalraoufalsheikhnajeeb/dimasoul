import Image from "next/image";
import { blogPosts, teamMembers } from "@/app/data";
import Link from "next/link";

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
              <h2 className="mb-4 text-4xl font-bold text-primary">Blogs</h2>
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

      <div className="py-16">
        <div className="container mb-8 flex w-full flex-col gap-4 px-4 lg:flex-row">
          <p className="mx-auto w-full max-w-2xl text-3xl font-bold lg:w-1/2">
            Our Blog For You
          </p>
          <p className="mx-auto w-full max-w-2xl text-sm text-gray-700 lg:w-1/2">
            Lorem ipsum dolor sit am et consectetur. Convallis est urna
            adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet
            at quam adipiscing.
          </p>
        </div>
        <div className="container flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={400}
                className="aspect-[3/4] h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="line-clamp-2 text-lg font-semibold">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {post.description.split(" ").slice(0, 50).join(" ")}...
                  <Link href={post.link} className="text-primary">
                    {" "}
                    See more
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
