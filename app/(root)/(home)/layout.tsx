import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Video Conference",
  description: "Video calling app",
  icons: {
    icon: "/icon/logo.svg",
  },
};

function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-4 pb-6 pt-24 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </div>
  );
}

export default HomeLayout;
