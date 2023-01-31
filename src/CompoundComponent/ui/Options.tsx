import React from "react";
import useSelectContext from "../hooks/useSelectContext";

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLUListElement>;

function Options({ children, className }: Props) {
  const { isOpened } = useSelectContext() || {};

  if (!isOpened) return null;

  return <ul className={className}>{children}</ul>;
}

export default Options;
