import useSelectContext from "../hooks/useSelectContext";
import getClassList from "../utils/getClassList";
import type { OptionType } from "../type";

type Props = OptionType & React.HTMLAttributes<HTMLLIElement>;

function Option({ id, name, className }: Props) {
  const { onOptionClick, selectedOption } = useSelectContext() || {};
  const classList = getClassList(
    className,
    selectedOption?.id === id && "selected"
  );

  return (
    <li
      className={classList}
      onClick={onOptionClick && onOptionClick({ id, name })}
    >
      {name}
    </li>
  );
}

export default Option;
