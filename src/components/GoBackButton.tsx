"use client";

import React from "react";

const GoBackButton = () => {
  return (
    <div>
      <button
        onClick={() => window.history.back()}
        className="flex items-center justify-between gap-2 rounded-lg border border-gray-800 px-4 py-2 text-sm transition-colors hover:bg-gray-800 cursor-pointer"
      >
        <span aria-hidden="true">←</span>
        Back
      </button>
    </div>
  );
};

export default GoBackButton;
