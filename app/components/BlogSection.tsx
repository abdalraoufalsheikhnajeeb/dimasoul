import Image from "next/image";
import { blogPosts } from "../data";
import Link from "next/link";
import BlogCard from "./BlogCard";

const BlogSection = async () => {
  return (
    <section className="container">
      {/* Header */}

      <div className="mb-8 flex flex-col ">
      <h4 className="text-xl font-bold  text-primary">Blog</h4>
        <div className="flex w-full justify-between">
          <div>
            <h5 className="mt-2 text-3xl font-bold">Our Blog For You</h5>
          </div>
          <Link href="/blog" className="flex items-center text-primary">
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
          </Link>
        </div>
      </div>

      {/* Blog Grid for Desktop */}
      <div className="container hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.slice(0, 6).map((post) => (
          <BlogCard {...post} />
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
