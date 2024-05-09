import { SvgProperties } from "@/types/svg/SvgProperties.type";
import React from "react";

const MainLogo = ({ width = 26, height = 5, deg = 0 }: SvgProperties) => {
  return (
    <svg
      width={`${width}rem`}
      height={`${height}rem`}
      transform={`rotate(${deg})`}
      viewBox="0 0 426 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.0068 1.69141L46.4917 48.9155H47.3901L66.7627 1.69141H93.3789V83H72.4902V35.1582H71.8164L53.3423 82.3823H40.5396L22.0654 34.9336H21.3916V83H0.50293V1.69141H27.0068Z"
        fill="#FF5816"
      />
      <path
        d="M125.723 83H104.385V1.69141H125.723V83ZM206.694 83H188.782L158.628 39.145H158.066V83H136.729V1.69141H154.978L184.683 45.4341H185.356V1.69141H206.694V83ZM303.838 1.69141H325.176V65.7612H358.362V83H303.838V1.69141ZM367.627 1.69141H425.688V18.9302H388.965V33.6982H422.712V50.937H388.965V65.7612H425.52V83H367.627V1.69141Z"
        fill="black"
      />
      <path
        d="M270.596 28.4761C270.109 26.492 269.248 24.8075 268.013 23.4224C266.815 22.0373 265.299 20.9891 263.464 20.2778C261.667 19.5666 259.552 19.2109 257.119 19.2109C253.376 19.2109 250.156 20.1094 247.461 21.9062C244.803 23.7031 242.744 26.3423 241.284 29.8237C239.862 33.2677 239.15 37.4043 239.15 42.2334C239.15 47.1374 239.824 51.3301 241.172 54.8115C242.557 58.2555 244.578 60.8947 247.236 62.729C249.894 64.5633 253.132 65.4805 256.951 65.4805C260.32 65.4805 263.184 64.9751 265.542 63.9644C267.9 62.9162 269.66 61.4375 270.82 59.5283C271.981 57.6191 272.561 55.373 272.561 52.79L276.379 53.2393H257.4V37.7974H293.169V48.9717C293.169 56.1966 291.615 62.467 288.508 67.7827C285.439 73.061 281.152 77.104 275.649 79.9116C270.184 82.7192 263.914 84.123 256.838 84.123C249.014 84.123 242.108 82.4385 236.118 79.0693C230.129 75.7002 225.468 70.8711 222.136 64.582C218.842 58.293 217.195 50.9183 217.195 42.458C217.195 33.7731 218.936 26.2674 222.417 19.9409C225.898 13.6144 230.615 8.80404 236.567 5.50977C242.557 2.21549 249.239 0.568359 256.614 0.568359C262.94 0.568359 268.705 1.76628 273.909 4.16211C279.112 6.52051 283.324 9.81478 286.543 14.0449C289.762 18.2751 291.672 23.0854 292.271 28.4761H270.596Z"
        fill="#FF5716"
      />
    </svg>
  );
};

export default MainLogo;