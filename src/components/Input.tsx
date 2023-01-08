import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, className, ...rest }: Props) {
  return (
    <div className="my-3">
      {label && <label className="uppercase block text-left">{label}</label>}
      <input
        className={`px-4 py-2 border-2 shadow-sm ${className}`}
        {...rest}
      />
    </div>
  );
}
