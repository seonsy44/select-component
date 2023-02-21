import { useRef } from "react";

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
  //   optionProps: {
  //     onClick: () => void;
  //     onKeyDown: () => void;
  //     onMouseEnter: () => void;
  //   };
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

  if (!children || typeof children !== "function") return null;

  return (
    <div className="select" ref={selectRef}>
      {children({
        isOpened,
        selectedOption,
        buttonProps: { onClick: toggle, onKeyDown: handleKeyDownOnButton },
        optionsProps: { onMouseLeave: handleMouseLeave },
      })}
    </div>
  );
}

export default Select;
