import React from "react";
import useSelectContext from "../hooks/useSelectContext";

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

function Button({ children, className }: Props) {
  const { toggle, selectedOption } = useSelectContext() || {};

  return (
    <button className={className} type="button" onClick={toggle}>
      {!selectedOption || selectedOption.id === "default"
        ? children
        : selectedOption.name}
    </button>
  );
}

export default Button;
