import optionFromNode from "../utils/optionFromNode";
import useSelectContext from "./useSelectContext";

function useMouse() {
  const { changeFocusedOption } = useSelectContext();

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
