import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  width: string;
  height: string;
  src: string;
  alt?: string;
}

export default function ImageParallax({ width, height, src, alt }: Props) {

  return (
    <div
      className="overflow-hidden relative"
      style={{ width, height }}
    >
      <img
        src={src}
        alt={alt}
        className="transition-transform border shadow-sm ease-linear absolute z-[-1] top-[-50%]"
      />
    </div>
  );
}
