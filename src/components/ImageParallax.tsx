import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  width: string;
  height: string;
  src: string;
  alt?: string;
}

export default function ImageParallax({ width, height, src, alt }: Props) {
  const { ref, inView, entry } = useInView({
    trackVisibility: true,
    threshold: 0.5,
  });
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset % window.innerHeight);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  console.log(entry?.intersectionRect);

  return (
    <div
      ref={ref}
      className="overflow-hidden relative"
      style={{ width, height }}
    >
      <img
        src={src}
        alt={alt}
        className="transition-transform border shadow-sm ease-linear absolute z-[-1] top-[-50%]"
        style={{
          transform: `translateY(${offset / 10}px)`,
        }}
      />
    </div>
  );
}
