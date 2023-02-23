import { useRef } from "react";

import useSelectedOption from "./hooks/useSelectedOption";
import useToggle from "./hooks/useToggle";
import useFocusedOption from "./hooks/useFocusedOption";
import useKeyDown from "./hooks/useKeyDown";
import useMouse from "./hooks/useMouse";
import type { OptionType } from "../type";
import useClickAway from "./hooks/useClickAway";

type Props = {
  selectRef: React.RefObject<HTMLDivElement>;
  defaultOption: OptionType;
  onSelectChange: (option: OptionType) => void;
  onSelectOpen?: () => void;
  onSelectClose?: () => void;
};

function useSelect({ selectRef, defaultOption, onSelectChange, onSelectOpen, onSelectClose }: Props) {
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

  return {
    selectRef,
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
  };
}

export default useSelect;
