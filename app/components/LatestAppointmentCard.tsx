import Image from "next/image";
import React from "react";

interface LatestAppointmentCardProps {
  id: number;
  title: string;
  location: string;
  price: string;
  date: string;
  time: string;
  image: string;
}

const LatestAppointmentCard: React.FC<LatestAppointmentCardProps> = ({
  date,
  id,
  image,
  location,
  price,
  time,
  title,
}) => {
  return (
    <div
      key={id}
      className="hover:bg-primaryLight flex w-full flex-col items-center justify-center gap-4 rounded-xl border bg-white p-6 transition-all"
    >
      <Image
        width={200}
        height={200}
        src={image}
        alt={title}
        className="h-[8rem] w-[8rem] rounded-full object-cover 2xl:h-[12.5rem] 2xl:w-[12.5rem]"
      />
      <h3 className="text-blackLight text-xl font-bold 2xl:text-3xl">
        {title}
      </h3>
      <div className="flex justify-center gap-6">
        <div className="flex items-center text-sm text-gray-500">
          <Image
            width={20}
            height={20}
            src="/images/Location.svg"
            alt="clock"
            className=""
          />
          <span className="text-lightGray text-lg 2xl:text-2xl">
            {location}
          </span>
        </div>
        <div className="flex gap-2 text-sm text-gray-500">
          <Image
            width={20}
            height={20}
            src="/images/money_bag.svg"
            alt="clock"
            className=""
          />
          <span className="text-lightGray text-lg 2xl:text-2xl">{price}</span>
        </div>
      </div>
      <div className="mt-4 text-center">
        <div className="flex w-full cursor-pointer items-center justify-center space-x-3 rounded-md bg-primary p-4 hover:bg-primary">
          <div className="flex items-center space-x-1 text-white">
            <Image
              width={20}
              height={20}
              src="/images/clock.svg"
              alt="clock"
              className=""
            />
            <span className="text-xs 2xl:text-base">{time}</span>
          </div>
          <div className="flex items-center space-x-1 text-white">
            <Image
              width={20}
              height={20}
              src="/images/calender.svg"
              alt="calender"
              className=""
            />
            <span className="text-xs 2xl:text-base">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestAppointmentCard;
