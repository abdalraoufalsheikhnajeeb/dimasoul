import Image from "next/image";
import { appointmentsData } from "../data";

const Appointments = async () => {
  const displayedAppointments = appointmentsData.slice(0, 3);

  return (
    <div className="sec flex w-full flex-col items-center justify-center gap-6">
      <div className="flex w-full items-center justify-center lg:justify-between">
        <h2 className="text-3xl font-bold lg:text-2xl">Latest Appointment</h2>

        <a href="#" className="hidden text-green-600 hover:underline lg:block">
          See More <span className="">&rarr;</span>
        </a>
      </div>
      <div className="w-f flex flex-col items-center justify-between gap-10 lg:flex-row">
        {displayedAppointments.map((appointment, index) => (
          <div
            key={index}
            className="hover:bg-green-700BG flex flex-col items-center justify-center gap-4 rounded-xl border bg-white p-6 transition-all"
          >
            <Image
              width={200}
              height={200}
              src={appointment.image}
              alt={appointment.title}
              className="h-24 w-24 rounded-full"
            />
            <h3 className="text-lg font-semibold">{appointment.title}</h3>
            <div className="flex justify-center gap-4">
              <div className="flex gap-2 text-sm text-gray-500">
                <Image
                  width={30}
                  height={30}
                  src="/images/test.webp"
                  alt="clock"
                  className=""
                />
                {appointment.location}
              </div>
              <div className="flex gap-2 text-sm text-gray-500">
                <Image
                  width={30}
                  height={30}
                  src="/images/test.webp"
                  alt="clock"
                  className=""
                />
                {appointment.price}
              </div>
            </div>
            <div className="mt-4 text-center">
              <div className="flex cursor-pointer items-center justify-center space-x-2 rounded-md bg-primary p-3 hover:bg-green-700">
                <div className="flex items-center space-x-1 text-white">
                  <Image
                    width={30}
                    height={30}
                    src="/images/test.webp"
                    alt="clock"
                    className=""
                  />
                  <span>{appointment.time}</span>
                </div>
                <div className="flex items-center space-x-1 text-white">
                  <Image
                    width={30}
                    height={30}
                    src="/images/test.webp"
                    alt="calender"
                    className=""
                  />
                  <span>{appointment.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href="#"
        className="block w-fit rounded-full bg-primary px-6 py-2 text-center text-white hover:bg-green-700 lg:hidden"
      >
        See More <span className="ms-2">&rarr;</span>
      </a>
    </div>
  );
};

export default Appointments;
