import React from "react";
import useSelectContext from "../hooks/useSelectContext";

type Props = React.HTMLAttributes<HTMLButtonElement>;

function Button({ ...attributes }: Props) {
  const { toggle, selectedOption } = useSelectContext() || {};

  return (
    <button {...attributes} type="button" onClick={toggle}>
      {selectedOption?.name}
    </button>
  );
}

export default Button;
