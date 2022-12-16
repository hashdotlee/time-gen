import { useEffect, useState } from "react";

export default function CountDown({ cn }: { cn?: string }) {
  const [hour, setHour] = useState(0);
  const [day, setDay] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      const timeLeft =
        (new Date("12/20/2023").getTime() - new Date().getTime()) / 1000;
      const d = Math.floor(timeLeft / (3600 * 24));
      const h = Math.floor((timeLeft - d * 3600 * 24) / 3600);
      const m = Math.floor((timeLeft - h * 3600 - d * 3600 * 24) / 60);
      const s = Math.floor(timeLeft - h * 3600 - m * 60 - d * 3600 * 24);
      setHour(h);
      setMinute(m);
      setSecond(s);
      setDay(d);
    }, 1000);
    return () => clearTimeout(t);
  });
  return (
    <span className={cn}>
      {day < 10 ? "0" + day : day} D : {hour < 10 ? "0" + hour : hour} H :{" "}
      {minute < 10 ? "0" + minute : minute} M :{" "}
      {second < 10 ? "0" + second : second} S
    </span>
  );
}
