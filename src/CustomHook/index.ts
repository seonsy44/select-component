import useSelectedOption from "./hooks/useSelectedOptions";
import useToggle from "./hooks/useToggle";
import type { OptionType } from "../type";

type Props = {
  defaultOption: OptionType;
  onSelectChange: (option: OptionType) => void;
};

function useSelect({ defaultOption, onSelectChange }: Props) {
  const { isOpened, toggle } = useToggle({});
  const { selectedOption, changeSelectedOption, handleOptionClick } = useSelectedOption({
    defaultOption,
    onSelectChange,
    toggle,
  });

  return { isOpened, selectedOption };
}

export default useSelect;
