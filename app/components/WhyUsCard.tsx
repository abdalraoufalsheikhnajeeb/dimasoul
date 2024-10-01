import Image from "next/image";
import React from "react";

interface WhyUsCardProps {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
}

const WhyUsCard: React.FC<WhyUsCardProps> = ({
  description,
  id,
  imageSrc,
  title,
}) => {
  return (
    <div
      key={id}
      className="flex flex-col items-center rounded-2xl bg-gray-50 p-6 text-center"
    >
      <div className="mb-4">
        <Image
          src={imageSrc}
          alt={"Why_IMG"}
          width={0}
          height={0}
          className="h-20 w-20 rounded-full 2xl:h-28 2xl:w-28"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <p className="text-lightGray">{description}</p>
      </div>
    </div>
  );
};

export default WhyUsCard;
