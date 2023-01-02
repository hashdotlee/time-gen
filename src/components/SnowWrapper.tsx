import { ReactNode, useEffect, useMemo, useState } from "react";

interface SnowWrapperProps {
  children?: ReactNode;
}
export default function SnowWrapper({ children }: SnowWrapperProps) {
  const maxWidth = window.innerWidth || 1920;
  const snows = useMemo(() => {
    const s: {
      width: number;
      top: number;
      left: number;
      opacity: number;
      time: number;
    }[] = [];
    for (let i = 0; i < 200; i++) {
      let randomLeft = Math.floor(Math.random() * maxWidth);
      let randomOpa = (Math.floor(Math.random() * 100) % 10) * 10 + 10;
      let randomTime = Math.floor(Math.random() * 3) + 3;
      let randomWidth = (Math.floor(Math.random() * 3) % 5) / 4;
      s.push({
        top: 0,
        left: randomLeft,
        opacity: randomOpa,
        time: randomTime,
        width: randomWidth,
      });
    }
    return s;
  }, []);
  return (
    <div className="w-full h-full z-[-1] absolute top-0 overflow-hidden">
      <div className="relative w-full h-full">
        {snows.map((item, index) => (
          <div
            key={index}
            className={`absolute z-50 bg-white rounded-full`}
            style={{
              width: item.width + "rem",
              height: item.width + "rem",
              animation: `fall-${Math.floor(Math.random() * 5 + 1)} ${item.time
                }s linear infinite`,
              left: item.left,
              opacity: item.opacity + "%",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
