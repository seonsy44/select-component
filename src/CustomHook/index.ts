import { useRef } from "react";

import useSelectedOption from "./hooks/useSelectedOption";
import useToggle from "./hooks/useToggle";
import useFocusedOption from "./hooks/useFocusedOption";
import useKeyDown from "./hooks/useKeyDown";
import type { OptionType } from "../type";

type Props = {
  defaultOption: OptionType;
  onSelectChange: (option: OptionType) => void;
};

function useSelect({ defaultOption, onSelectChange }: Props) {
  const selectRef = useRef<HTMLDivElement>(null);
  const { isOpened, toggle } = useToggle({});
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

  return { selectRef, isOpened, selectedOption, buttonProps: { onClick: toggle, onKeyDown: handleKeyDownOnButton } };
}

export default useSelect;
