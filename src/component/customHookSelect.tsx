import { useRef } from "react";

import useSelect from "../CustomHook";
import focusOnButton from "../utils/focusOnButton";
import options from "../consts/options";
import type { OptionType } from "../type";

function CustomHookSelect() {
  const selectRef = useRef<HTMLDivElement>(null);
  const handleChange = (option: OptionType) => {
    console.log(`${option.name}: API /${option.id}`);
  };
  const handleSelectClose = () => focusOnButton(selectRef);

  const { isOpened, selectedOption, buttonProps, optionsProps, optionProps } = useSelect({
    selectRef,
    defaultOption: options[0],
    onSelectChange: handleChange,
    onSelectClose: handleSelectClose,
  });

  return (
    <div className="select" ref={selectRef}>
      <label className="select-label">Custom Hook: </label>
      <button className="select-button" {...buttonProps}>
        {selectedOption.name}
      </button>

      {isOpened && (
        <ul className="select-options" {...optionsProps}>
          {options.map((option: OptionType) => (
            <li key={option.id} data-id={option.id} className={`select-option${selectedOption?.id === option.id ? " selected" : ""}`} {...optionProps}>
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomHookSelect;
