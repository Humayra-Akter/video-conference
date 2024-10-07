import React from "react";

const Home = () => {
  return (
    <div className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-3xl bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-10">
          <h2 className="glassmorphism max-w-[270px] rounded text-center text-base font-normal py-2 ">
            Upcoming Meeting at 1200
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
