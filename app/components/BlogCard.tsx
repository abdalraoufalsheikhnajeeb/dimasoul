import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
  id: number;
  title: string;
  image: string;
  description: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  description,
  id,
  image,
  link,
  title,
}) => {
  return (
    <div
      key={id}
      className="max-h-[32.5rem] overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl"
    >
      <Image
        quality={60}
        src={image}
        alt={title}
        width={101}
        height={101}
        className="aspect-[3/4] h-3/5 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="line-clamp-2 text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">
          {description.split(" ").slice(0, 50).join(" ")}...
          <Link href={link} className="text-primary">
            {" "}
            See more
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
