import { useRef } from "react";

import useToggle from "./hooks/useToggle";
import useSelectedOption from "./hooks/useSelectedOption";
import useFocusedOption from "./hooks/useFocusedOption";
import { OptionType } from "../type";
import useKeyDown from "./hooks/useKeyDown";

type ChildrenProps = {
  isOpened: boolean;
  selectedOption: OptionType;
  buttonProps: {
    onClick: () => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
  };
  //   optionsProps: {
  //     onMouseLeave: () => void;
  //   };
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

  if (!children || typeof children !== "function") return null;

  return (
    <div className="select" ref={selectRef}>
      {children({
        isOpened,
        selectedOption,
        buttonProps: { onClick: toggle, onKeyDown: handleKeyDownOnButton },
      })}
    </div>
  );
}

export default Select;
