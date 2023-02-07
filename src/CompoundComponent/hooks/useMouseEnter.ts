import optionFromNode from "../utils/optionFromNode";
import useSelectContext from "./useSelectContext";

function useMouseEnter() {
  const { changeFocusedOption } = useSelectContext();

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    const option = optionFromNode(e.currentTarget);
    if (!option) return;

    changeFocusedOption(option);
  };

  return { handleMouseEnter };
}

export default useMouseEnter;
