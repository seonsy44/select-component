import { MouseEvent, useState } from "react";
import type { OptionType } from "../type";

type Props = {
  defaultOption: OptionType;
  onSelectChange: (option: OptionType) => void;
  toggle: (action?: "open" | "close" | MouseEvent<HTMLButtonElement>) => void;
};

function useSelectedOption({ defaultOption, onSelectChange, toggle }: Props) {
  const [selectedOption, setSelectedOption] = useState<OptionType>(defaultOption);

  const changeSelectedOption = (option: OptionType) => {
    onSelectChange(option);
    setSelectedOption(option);
    toggle();
  };

  return { selectedOption, changeSelectedOption };
}

export default useSelectedOption;
