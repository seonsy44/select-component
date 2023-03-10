import React from "react";

import useToggle from "./hooks/useToggle";
import useSelectedOption from "./hooks/useSelectedOption";
import useFocusedOption from "./hooks/useFocusedOption";
import useKeyDown from "./hooks/useKeyDown";
import useMouse from "./hooks/useMouse";
import useClickAway from "./hooks/useClickAway";
import type { OptionType } from "../type";

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
  selectRef: React.RefObject<HTMLDivElement>;
  defaultOption: OptionType;
  onSelectChange: (option: OptionType) => void;
  onSelectOpen?: () => void;
  onSelectClose?: () => void;
};

function Select({ children, selectRef, defaultOption, onSelectChange, onSelectOpen, onSelectClose }: Props) {
  const { isOpened, toggle } = useToggle({ onOpen: onSelectOpen, onClose: onSelectClose });
  const { selectedOption, changeSelectedOption, handleOptionClick } = useSelectedOption({
    defaultOption,
    onSelectChange,
    toggle,
  });
  const { changeFocusedOption } = useFocusedOption({ selectedOption, selectRef, isOpened });
  const { handleKeyDownOnButton, handleKeyDownOnLI } = useKeyDown({
    toggle,
    changeFocusedOption,
    changeSelectedOption,
  });
  const { handleMouseEnter, handleMouseLeave } = useMouse({ changeFocusedOption });
  useClickAway({ ref: selectRef, handleClick: toggle.off });

  if (!children || typeof children !== "function") return null;

  return (
    <>
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
    </>
  );
}

export default Select;
