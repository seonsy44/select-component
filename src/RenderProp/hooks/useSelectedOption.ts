import { useState } from "react";
import type { OptionType } from "../../type";

type Props = {
  defaultOption: OptionType;
  onSelectChange: (option: OptionType) => void;
  toggle: {
    (): void;
    on(): void;
    off(): void;
  };
};

function useSelectedOption({ defaultOption, onSelectChange, toggle }: Props) {
  const [selectedOption, setSelectedOption] = useState<OptionType>(defaultOption);

  const changeSelectedOption = (option: OptionType) => {
    onSelectChange(option);
    setSelectedOption(option);
    toggle.off();
  };

  return { selectedOption, changeSelectedOption };
}

export default useSelectedOption;
