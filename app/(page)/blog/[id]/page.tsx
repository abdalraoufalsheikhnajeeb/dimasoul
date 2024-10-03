import { notFound } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "@/app/data";
import Link from "next/link";

interface BlogDetailParams {
  params: {
    id: string;
  };
}
function shuffleArray(array: any) {
  return array.sort(() => Math.random() - 0.5);
}

export default async function BlogDetail({ params }: BlogDetailParams) {
  const blog = blogPosts.find((post) => post.id.toString() === params.id);

  if (!blog) {
    return notFound();
  }
  const randomBlogPosts = shuffleArray(blogPosts).slice(0, 3);
  return (
    <section className="py-8 md:py-16">
      <section className="bg-primaryBG">
        <div className="mx-auto max-w-[90vw] px-4 py-24 text-center md:py-16 md:text-left lg:max-w-7xl">
          {/* Services Section */}
          <div className="mt-16 md:flex md:items-center md:space-x-8">
            {/* Vertical Line */}
            <div className="hidden bg-primary md:block md:h-full md:w-1"></div>

            {/* Services Text */}
            <div className="border-primary pl-6 md:w-1/2 md:border-l-4">
              <h2 className="mb-4 text-4xl font-bold text-primary">
                Research Detail
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
      <div className="container mx-auto px-4">
        {/* Blog Image */}
        <Image
          src={blog.image}
          alt={blog.fullTitle}
          width={800}
          height={400}
          className="mb-8 w-full rounded-xl"
        />
        <div className="flex lg:flex-row flex-col gap-8">
          <div className="flex flex-col">
            <h1 className="mb-4 text-4xl font-bold">{blog.fullTitle}</h1>
            {/* Blog Content */}
            <p className="text-lg text-gray-700">{blog.content}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-bold">Recommendation Blog</p>
            <div className="flex w-80 flex-col gap-4">
              {randomBlogPosts.map((post: any) => (
                <div
                  key={post.id}
                  className="flex items-center justify-center gap-2"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={200}
                    height={200}
                    className="aspect-square h-32 w-full rounded-xl object-cover"
                  />
                  <div className="p-4">
                    <h3 className="line-clamp-2 text-lg font-semibold">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {post.description.split(" ").slice(0, 5).join(" ")}...
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
      </div>
    </section>
  );
}
