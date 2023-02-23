import optionFromNode from "../utils/optionFromNode";
import type { OptionType } from "../../type";

type Props = {
  changeFocusedOption: (option: OptionType | null) => void;
};

function useMouse({ changeFocusedOption }: Props) {
  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    const option = optionFromNode(e.currentTarget);
    if (!option) return;

    changeFocusedOption(option);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLUListElement>) => {
    changeFocusedOption(null);
  };

  return { handleMouseEnter, handleMouseLeave };
}

export default useMouse;
