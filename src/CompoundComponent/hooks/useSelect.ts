import { createContext, useMemo, useState } from "react";
import type { OptionType } from "../type";

type SelectContextType = {
  isOpened: boolean;
  toggle: () => void;
  selectedOption: OptionType | null;
  onOptionClick: (option: OptionType) => () => void;
};

export const SelectContext = createContext<SelectContextType | null>(null);

type Props = {
  defaultValue?: OptionType;
  onSelectChange: (option: OptionType) => void;
};

function useSelect({ defaultValue, onSelectChange }: Props) {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(
    defaultValue ?? null
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
