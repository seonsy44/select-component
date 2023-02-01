import React from "react";

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLLabelElement>;

function Label({ children, ...attributes }: Props) {
  return <label {...attributes}>{children}</label>;
}

export default Label;
