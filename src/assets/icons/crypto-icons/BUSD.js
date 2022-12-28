import React from "react";

export const BUSD = ({ className, width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="12" fill="#F0B90B" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.9548 5.97886L11.9637 3.93982L6.95009 9.00144L8.94115 10.9925L13.9548 5.97886ZM16.9774 9.00145L14.9863 6.96241L6.95009 15.0466L8.94115 17.0377L16.9774 9.00145ZM5.91856 9.98499L7.90962 12.024L5.91856 14.0151L3.92749 12.024L5.91856 9.98499ZM20 12.024L18.0089 9.98499L9.97268 18.0692L11.9637 20.0603L20 12.024Z"
        fill="white"
      />
    </svg>
  );
};
