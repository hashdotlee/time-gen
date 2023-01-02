import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, ...rest }: Props) {
  return (
    <>
      {label && <label>{label}</label>}
      <input {...rest} />
    </>
  );
}
