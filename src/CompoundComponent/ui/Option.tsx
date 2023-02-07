import useSelectContext from "../hooks/useSelectContext";
import getClassList from "../utils/getClassList";
import type { OptionType } from "../type";
import useKeyDown from "../hooks/useKeyDown";

type Props = OptionType & React.HTMLAttributes<HTMLLIElement>;

function Option({ id, name, ...attributes }: Props) {
  const { onOptionClick, selectedOption } = useSelectContext() || {};
  const { handleKeyDownOnLI } = useKeyDown();
  const classList = getClassList(
    attributes?.className,
    selectedOption?.id === id && "selected"
  );

  return (
    <li
      {...attributes}
      data-id={id}
      className={classList}
      tabIndex={0}
      onClick={onOptionClick && onOptionClick({ id, name })}
      onKeyDown={handleKeyDownOnLI}
    >
      {name}
    </li>
  );
}

export default Option;
