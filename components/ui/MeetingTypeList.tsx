import Image from "next/image";
import React from "react";

const MeetingTypeList = () => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <div className="bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-xl cursor-pointer">
        <div className="flex-center glassmorphism size-12 rounded-xl">
          <Image
            src="/icons/add-meeting.svg"
            width={24}
            height={24}
            alt="meeting"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">New Meeting</h1>
          <p className="text-lg font-normal">Start an instant meeting</p>
        </div>
      </div>
    </div>
  );
};

export default MeetingTypeList;
