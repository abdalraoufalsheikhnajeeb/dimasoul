import { statisticsData } from "../data";

// Statistics.js
const Statistics = async () => {
  return (
    <section className="flex w-screen flex-col items-center bg-primary py-16 text-white md:flex-row md:justify-around">
      <div className="sec flex w-full flex-col justify-between gap-12 lg:flex-row">
        {statisticsData.map((item, index) => {
          const isLastItem = index === statisticsData.length - 1;
          return (
            <div
              key={index}
              className={`text-center ${!isLastItem ? "mb-6 md:mb-0" : ""}`}
            >
              <h3 className="text-5xl font-bold">{item.number}</h3>
              <p className="mt-2 text-xl">{item.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Statistics;
