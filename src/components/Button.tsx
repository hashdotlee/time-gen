import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  classname?: string;
}
export default function Button({ classname, children, ...rest }: Props) {
  return (
    <button
      className={`py-4 relative hover:bg-black z-1 px-4 text-center border shadow-sm font-bold text-white tracking-wider transition-all bg-red-500 ${classname}`}
      {...rest}
    >
      {children}
    </button>
  );
}
