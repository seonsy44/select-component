import React from "react";

import useSelectContext from "../hooks/useSelectContext";
import useKeyDown from "../hooks/useKeyDown";
import getClassList from "../utils/getClassList";
import type { OptionType } from "../type";

type Props = OptionType & React.HTMLAttributes<HTMLLIElement>;

function Option({ id, name, ...attributes }: Props) {
  const { changeSelectedOption, selectedOption } = useSelectContext() || {};
  const { handleKeyDownOnLI } = useKeyDown();
  const classList = getClassList(attributes?.className, selectedOption?.id === id && "selected");

  return (
    <li
      {...attributes}
      data-id={id}
      className={classList}
      tabIndex={0}
      onClick={() => {
        if (changeSelectedOption) changeSelectedOption({ id, name });
      }}
      onKeyDown={handleKeyDownOnLI}
    >
      {name}
    </li>
  );
}

export default React.memo(Option);
