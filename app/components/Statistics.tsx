"use client";

import { statisticsData } from "../data";
import CountUp from "react-countup";
const Statistics: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center overflow-hidden bg-primary py-10 text-white md:flex-row md:justify-around 2xl:py-16">
      {statisticsData.map((item, index) => {
        const isLastItem = index === statisticsData.length - 1;
        return (
          <div
            key={index}
            className={`text-center ${!isLastItem ? "mb-6 md:mb-0" : ""}`}
          >
            <h3 className="text-5xl font-bold">
              <CountUp end={Number(item.number)} />
            </h3>
            <p className="mt-2 text-xl">{item.label}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Statistics;
