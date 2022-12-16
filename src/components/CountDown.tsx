import { useEffect, useState } from "react";

export default function CountDown({ cn }: { cn?: string }) {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      const timeLeft =
        (new Date("12/20/2023").getTime() - new Date().getTime()) / 1000;
      const h = Math.floor(timeLeft / 3600);
      const m = Math.floor((timeLeft - h * 3600) / 60);
      const s = Math.floor(timeLeft - h * 3600 - m * 60);
      setHour(h);
      setMinute(m);
      setSecond(s);
    }, 1000);
    return () => clearTimeout(t);
  });
  return (
    <span className={cn}>
      {hour < 10 ? "0" + hour : hour} : {minute < 10 ? "0" + minute : minute} : {second < 10 ? "0" + second : second}
    </span>
  );
}
