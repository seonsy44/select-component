import React from "react";

import useSelectContext from "../hooks/useSelectContext";
import useKeyDown from "../hooks/useKeyDown";
import getClassList from "../utils/getClassList";
import type { OptionType } from "../type";
import useMouseEnter from "../hooks/useMouseEnter";

type Props = OptionType & React.HTMLAttributes<HTMLLIElement>;

function Option({ id, name, ...attributes }: Props) {
  const { changeSelectedOption, selectedOption } = useSelectContext();
  const { handleKeyDownOnLI } = useKeyDown();
  const { handleMouseEnter } = useMouseEnter();
  const classList = getClassList(attributes?.className, selectedOption?.id === id && "selected");
  const handleClick = () => changeSelectedOption({ id, name });

  return (
    <li
      {...attributes}
      data-id={id}
      className={classList}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDownOnLI}
      onMouseEnter={handleMouseEnter}
    >
      {name}
    </li>
  );
}

export default React.memo(Option);
