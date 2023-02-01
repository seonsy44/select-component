import { createContext, useMemo, useState } from "react";
import type { OptionType } from "../type";

type Props = {
  defaultOption?: OptionType;
  onSelectChange: (option: OptionType) => void;
};

function useSelect({ defaultOption, onSelectChange }: Props) {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(
    defaultOption ?? null
  );

  const toggle = () => {
    setIsOpened(!isOpened);
  };

  const onOptionClick = (option: OptionType) => () => {
    onSelectChange(option);
    setSelectedOption(option);
    toggle();
  };

  const value = useMemo(
    () => ({
      isOpened,
      toggle,
      selectedOption,
      onOptionClick,
    }),
    [isOpened, selectedOption]
  );

  return value;
}

export default useSelect;
