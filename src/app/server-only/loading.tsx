import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <svg
        className="animate-spin h-8 w-8 text-gray-400 mx-auto"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2.93 6.243A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3.93-1.695zM20.485 17.657A7.962 7.962 0 0120 12h-4c0 .686-.09 1.353-.262 2H20c2.21 0 4-1.79 4-4h-4c0 .686-.09 1.353-.262 2h2.747zM12 .01V4c3.042 0 5.824 1.135 7.938 3l-1.695-3.93A7.962 7.962 0 0012 .01zM6 .01L4 .01C1.79 .01 .01 1.79 .01 4h4c0-.686 .09-1.353 .262-2H6z"
        ></path>
      </svg>
      <p className="text-center text-gray-600 mt-2">Loading...</p>
    </div>
  );
};

export default Loading;
