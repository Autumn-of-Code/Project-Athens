import Image from "next/image";
import { timelineEvents } from "@/app/config/Timeline/timeline";

export default function TimelineMobile() {
  const filteredEvents = timelineEvents.filter(event => event.date);

  return (
    <div className="relative flex flex-col px-8 py-8 md:hidden">
      <div className="absolute left-1 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-yellow-500 to-orange-500" />

      {filteredEvents.map((event, index) => (
        <div key={index} className="relative mb-12 last:mb-0">
          <div className="absolute -left-8 h-3 w-3 bg-[#DDDDDD] rounded-full" />

          <div className="ml-8">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{event.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{event.date}</p>
            </div>

            <div className="mb-4">
              <span
                className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${event.status === "OPENS"
                  ? "bg-yellow-100 text-yellow-700"
                  : event.status === "COMPLETED"
                    ? "bg-red-100 text-red-700"
                    : "bg-orange-100 text-orange-700"
                  }`}
              >
                {event.status}
              </span>
            </div>

            <div className="relative overflow-hidden">
              <Image
                src={event.image as string}
                alt={event.title || "Timeline Event"}
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
