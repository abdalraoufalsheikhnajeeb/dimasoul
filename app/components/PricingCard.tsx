import React from "react";
import Button from "./Button";
import Image from "next/image";

interface PricingCardProps {
  id: number;
  name: string;
  price: string;
  description: string;
  duration: string;
  features: string[];
  highlighted?: any;
}

const PricingCard: React.FC<PricingCardProps> = ({
  description,
  duration,
  features,
  id,
  name,
  price,
  highlighted,
}) => {
  return (
    <div
      key={id}
      className={`rounded-2xl p-6 ${
        highlighted
          ? "bg-primaryBG"
          : "border border-gray-200 bg-white shadow-md"
      }`}
    >
      <h3 className="mb-4 text-xl font-semibold">{name}</h3>
      <p className="mb-4 text-gray-500">{description}</p>
      <div className="mb-1 text-3xl font-bold text-primary">{price}</div>
      <div className="text-gray-500">{duration}</div>

      {/* Features */}
      <ul className="my-4 space-y-2">
        {features.map((feature: any, index: number) => (
          <li key={index} className="flex items-center gap-2 text-gray-700">
            <Image
              src="/images/green_check.svg"
              alt="check"
              width={16}
              height={16}
            />
            <span className="text-xs text-lightGray 2xl:text-base">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* <button className="w-full rounded-full bg-primary px-6 py-3 text-white hover:bg-green-700">
        Get Started
      </button> */}
      <Button
        title="Get Started"
        extraClassName="w-full text-customWhite font-bold"
      />
    </div>
  );
};

export default PricingCard;
