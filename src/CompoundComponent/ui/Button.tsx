import React from "react";
import useKeyDown from "../hooks/useKeyDown";
import useSelectContext from "../hooks/useSelectContext";

type Props = React.HTMLAttributes<HTMLButtonElement>;

function Button({ ...attributes }: Props) {
  const { toggle, selectedOption } = useSelectContext();
  const { handleKeyDownOnButton } = useKeyDown();

  return (
    <button {...attributes} type="button" onClick={toggle} onKeyDown={handleKeyDownOnButton}>
      {selectedOption?.name}
    </button>
  );
}

export default Button;
