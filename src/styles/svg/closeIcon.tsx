import { SvgProperties } from "@/types/svg/SvgProperties.type";
import React from "react";
import { theme } from "../theme";

const CloseIcon = ({ width = 0.75, height = 1, color = theme.base.white }: SvgProperties) => {
  return (
    <svg
      width={`${width}rem`}
      height={`${height}rem`}
      viewBox="0 0 12 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" fill={color} />
    </svg>
  );
};

export default CloseIcon;
