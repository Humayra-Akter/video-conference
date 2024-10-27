"use client";

import { useGetCalls } from "@/hooks/useGetCalls";
import { CallRecording } from "@stream-io/node-sdk";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CallList = ({ type }: { type: "ended" | "upcoming" | "recordings" }) => {
  const { endedCalls, upcomingCalls, recordings, isLoading } = useGetCalls();
  const router = useRouter();
  const [recording, setRecording] = useState<CallRecording[]>([]);

  const getCalls = () => {
    switch (type) {
      case "ended":
        return endedCalls;
      case "recordings":
        return recording;
      case "upcoming":
        return upcomingCalls;

      default:
        return [];
    }
  };

  return <div></div>;
};

export default CallList;