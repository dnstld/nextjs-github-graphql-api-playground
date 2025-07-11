"use client";

import GoBackButton from "@/components/GoBackButton";
import React from "react";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col gap-4 rounded-lg border border-gray-800 p-4">
        <h1 className="text-2xl text-gray-600 font-bold mb-4">Error</h1>
        <p>An unexpected error occurred. Please try again later.</p>
        <GoBackButton />
      </div>
    </div>
  );
};

export default Error;
