import React from "react";

import useMouse from "../hooks/useMouse";
import useSelectContext from "../hooks/useSelectContext";

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLUListElement>;

function Options({ children, ...attributes }: Props) {
  const { isOpened } = useSelectContext();
  const { handleMouseLeave } = useMouse();

  if (!isOpened) return null;

  return (
    <ul {...attributes} onMouseLeave={handleMouseLeave}>
      {children}
    </ul>
  );
}

export default Options;
