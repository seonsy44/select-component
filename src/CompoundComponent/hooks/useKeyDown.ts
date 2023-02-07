import optionFromNode from "../utils/optionFromNode";
import useSelectContext from "./useSelectContext";

function useKeyDown() {
  const { toggle, changeFocusedOption, changeSelectedOption } = useSelectContext() || {};

  const handleKeyDownOnButton = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if ((e.key === "ArrowDown" || e.key === "ArrowUp") && toggle) {
      toggle("open");
    }
  };

  const handleKeyDownOnLI = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (!changeFocusedOption || !changeSelectedOption) return;

    if (e.key === "Enter") {
      const option = optionFromNode(e.currentTarget);
      if (!option) return;

      changeSelectedOption(option);
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
