import MeetingTypeList from "@/components/ui/MeetingTypeList";
import React from "react";

const Home = () => {
  const now = new Date();
  const time = now.toLocaleTimeString("ban", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("ban", { dateStyle: "full" }).format(
    now
  );
  return (
    <div className="flex size-full flex-col gap-8 text-white">
      <div className="h-[250px] w-full rounded-3xl bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-10">
          <h2 className="glassmorphism max-w-[270px] rounded text-center text-base font-normal py-2 ">
            Upcoming Meeting at 1200
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-extrabold lg:text-5xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </div>
  );
};

export default Home;
