import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";
import SlickSlider, { Settings } from "react-slick";

interface Props {
  otherSettings?: Settings;
  children?: ReactNode;
}
function NextArrow({ onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="w-8 h-full bg-black cursor-pointer top-0 absolute z-10 right-[185px]"
    >
      <span className="relative block w-full h-full">
        <ChevronRightIcon className="w-6 h-6 bg-black cursor-pointer absolute top-[50%] translate-y-[-50%]" />
      </span>
    </div>
  );
}

function PrevArrow({ onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="w-8 h-full bg-black cursor-pointer absolute z-10 left-[185px]"
    >
      <span className="relative block w-full h-full">
        <ChevronLeftIcon className="w-6 h-6 bg-black cursor-pointer absolute z-10 top-[50%] translate-y-[-50%]" />
      </span>
    </div>
  );
}

export default function Slider({ children, otherSettings }: Props) {
  const settings: Settings = {
    slidesToShow: 1,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 500,
    centerPadding: "200px",
  };
  return (
    <SlickSlider {...settings} {...otherSettings}>
      {children}
    </SlickSlider>
  );
}
