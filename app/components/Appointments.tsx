import Image from "next/image";
import { appointmentsData } from "../data";
import LatestAppointmentCard from "./LatestAppointmentCard";
import Link from "next/link";

const Appointments = async () => {
  const displayedAppointments = appointmentsData.slice(0, 3);

  return (
    <div className="container relative flex w-full flex-col items-center justify-center gap-6 xl:gap-12 2xl:gap-20">
      <Image
        quality={60}
        src="/images/latest_leaf.svg"
        alt="leaf"
        width={101}
        height={101}
        className="absolute right-0 top-0 w-2/5"
      />
      <div className="flex w-full items-center justify-center justify-between">
        <h1 className="text-2xl font-bold xl:text-3xl 2xl:text-5xl">
          Latest Appointment
        </h1>

        <Link
          href="/"
          className="z-10 flex cursor-pointer items-center gap-2 font-bold text-primary"
        >
          <span>See More</span>
          <Image
            quality={60}
            src="/images/Arrow - Left.svg"
            alt="arrow"
            width={101}
            height={101}
            className="h-10 w-10 2xl:h-12 2xl:w-12"
          />
        </Link>
      </div>
      <div className="z-10 flex w-full flex-col items-center justify-between gap-10 lg:flex-row">
        {displayedAppointments.map((appointment, index: number) => (
          <LatestAppointmentCard {...appointment} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Appointments;
