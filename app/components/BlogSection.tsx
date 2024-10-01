import Image from "next/image";
import { blogPosts } from "../data";
import Link from "next/link";

const BlogSection = async () => {
  return (
    <section className="sec">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h4 className="text-lg font-bold text-primary">Blog</h4>
          <h2 className="mt-2 text-3xl font-bold">Our Blog For You</h2>
        </div>
        <a href="#" className="flex items-center text-primary">
          See More
          <svg
            className="ml-2 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14m-7-7l7 7-7 7"
            ></path>
          </svg>
        </a>
      </div>

      {/* Blog Grid for Desktop */}
      <div className="sec hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.slice(0, 6).map((post) => (
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

      {/* Blog List for Mobile */}
      <div className="flex flex-col space-y-6 md:hidden">
        {blogPosts.slice(0, 3).map((post) => (
          <div
            key={post.id}
            className="overflow-hidden rounded-xl bg-white shadow-md"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={250}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="mt-2 text-sm text-gray-600">
                {post.description}{" "}
                <Link href={post.link} className="text-primary">
                  {" "}
                  See more
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
