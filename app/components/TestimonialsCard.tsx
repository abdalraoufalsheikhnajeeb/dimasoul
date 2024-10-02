import Image from "next/image";
import React from "react";

interface TestimonialsCardProps {
  id: number;
  image: string;
  name: string;
  message: string;
  role: string;
}

const TestimonialsCard: React.FC<TestimonialsCardProps> = ({
  id,
  image,
  message,
  name,
  role,
}) => {
  return (
    <div key={id} className="embla__slide w-full flex-none">
      <div className="w-full rounded-xl bg-white p-6 shadow-lg">
        <div className="mb-4">
          <Image
            src={image}
            alt={name}
            width={100}
            height={100}
            className="mx-auto rounded-full"
          />
        </div>
        <p className="mb-4 text-gray-600">{message}</p>
        <h4 className="font-bold">{name}</h4>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
