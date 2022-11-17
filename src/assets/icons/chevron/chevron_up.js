import React from "react";

const ChevronUp = ({ className, width, height }) => {
  return (
    <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1186 6.71709L1.06674 16.8762C0.834069 17.1112 0.705887 17.4249 0.705887 17.7593C0.705887 18.0938 0.834069 18.4074 1.06674 18.6424L1.80682 19.3905C2.28907 19.8774 3.07286 19.8774 3.55437 19.3905L11.9953 10.8597L20.4456 19.4C20.6783 19.635 20.9885 19.7647 21.3192 19.7647C21.6503 19.7647 21.9605 19.635 22.1934 19.4L22.9333 18.6519C23.1659 18.4167 23.2941 18.1032 23.2941 17.7688C23.2941 17.4343 23.1659 17.1207 22.9333 16.8857L12.8722 6.71709C12.6388 6.48156 12.3272 6.3522 11.9959 6.35294C11.6633 6.3522 11.3518 6.48156 11.1186 6.71709Z"
      />
    </svg>
  );
};

export { ChevronUp };