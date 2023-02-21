import React, { useRef } from "react";

import useToggle from "./hooks/useToggle";
import useSelectedOption from "./hooks/useSelectedOption";
import useFocusedOption from "./hooks/useFocusedOption";
import useKeyDown from "./hooks/useKeyDown";
import type { OptionType } from "../type";
import useMouse from "./hooks/useMouse";

type ChildrenProps = {
  isOpened: boolean;
  selectedOption: OptionType;
  buttonProps: {
    onClick: () => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
  };
  optionsProps: {
    onMouseLeave: (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => void;
  };
  optionProps: {
    className?: string;
    tabIndex?: number;
    onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLLIElement>) => void;
    onMouseEnter: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  };
};

type Props = {
  children: (args: ChildrenProps) => JSX.Element;
  defaultOption: OptionType;
  onSelectChange: (option: OptionType) => void;
};

function Select({ children, defaultOption, onSelectChange }: Props) {
  const selectRef = useRef<HTMLDivElement>(null);
  const { isOpened, toggle } = useToggle({});
  const { selectedOption, changeSelectedOption } = useSelectedOption({ defaultOption, onSelectChange, toggle });
  const { changeFocusedOption } = useFocusedOption({ selectedOption, selectRef, isOpened });
  const { handleKeyDownOnButton, handleKeyDownOnLI } = useKeyDown({
    toggle,
    changeFocusedOption,
    changeSelectedOption,
  });
  const { handleMouseEnter, handleMouseLeave } = useMouse({ changeFocusedOption });
  const handleOptionClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const LI = e.currentTarget;
    const id = LI.dataset.id;
    const name = LI.textContent;
    if (!id || !name) return;
    changeSelectedOption({ id, name });
  };

  if (!children || typeof children !== "function") return null;

  return (
    <div className="select" ref={selectRef}>
      {children({
        isOpened,
        selectedOption,
        buttonProps: { onClick: toggle, onKeyDown: handleKeyDownOnButton },
        optionsProps: { onMouseLeave: handleMouseLeave },
        optionProps: {
          tabIndex: 0,
          onClick: handleOptionClick,
          onKeyDown: handleKeyDownOnLI,
          onMouseEnter: handleMouseEnter,
        },
      })}
    </div>
  );
}

export default Select;
