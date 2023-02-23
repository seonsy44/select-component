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

  const handleOptionClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const LI = e.currentTarget;
    const id = LI.dataset.id;
    const name = LI.textContent;
    if (!id || !name) return;
    changeSelectedOption({ id, name });
  };

  return { selectedOption, changeSelectedOption, handleOptionClick };
}

export default useSelectedOption;
