import React from "react";

export const BNB = ({ className, width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="23.9999" rx="12" fill="#F3BA2F" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 7.616L8.89267 10.7233L8.89274 10.7232L7.0848 8.9152L12 4L16.9168 8.91667L15.1088 10.7247L12 7.616ZM5.80806 10.1917L4 12L5.80794 13.8077L7.616 11.9996L5.80806 10.1917ZM12 16.384L8.89267 13.2769L7.08224 15.0822L7.0848 15.0848L12 20L16.9168 15.0834L16.9177 15.0824L15.1087 13.2754L12 16.384ZM18.1921 10.1927L16.384 12.0008L18.192 13.8087L20 12.0006L18.1921 10.1927ZM13.8346 11.9991H13.834L13.8357 12L13.8348 12.001L12.0001 13.8357L10.1671 12.0023L10.1646 11.9997L10.1671 11.9972L10.4884 11.6759L10.6442 11.52L12.0001 10.1644L13.8346 11.9991Z"
        fill="white"
      />
    </svg>
  );
};
