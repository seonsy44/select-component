import { OptionType } from "../../type";
import optionFromNode from "../utils/optionFromNode";

type Props = {
  toggle: {
    (): void;
    on(): void;
    off(): void;
  };
  changeFocusedOption: (option: OptionType | null) => void;
  changeSelectedOption: (option: OptionType) => void;
};

function useKeyDown({ toggle, changeFocusedOption, changeSelectedOption }: Props) {
  const handleKeyDownOnButton = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      toggle.on();
    }
  };

  const handleKeyDownOnLI = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (!changeFocusedOption || !changeSelectedOption) return;

    if (e.key === "Enter") {
      const option = optionFromNode(e.currentTarget);
      if (!option) return;

      changeSelectedOption(option);
      e.preventDefault();
      return;
    }

    if (e.key === "ArrowDown") {
      if (!e.currentTarget.nextSibling) return;

      const option = optionFromNode(e.currentTarget.nextSibling);
      if (!option) return;

      changeFocusedOption(option);
      return;
    }

    if (e.key === "ArrowUp") {
      if (!e.currentTarget.previousSibling) return;

      const option = optionFromNode(e.currentTarget.previousSibling);
      if (!option) return;

      changeFocusedOption(option);
    }
  };

  return { handleKeyDownOnButton, handleKeyDownOnLI };
}

export default useKeyDown;
