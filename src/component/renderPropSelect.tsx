import { useRef } from "react";

import focusOnButton from "../utils/focusOnButton";
import options from "../consts/options";
import type { OptionType } from "../type";
import Select from "../RenderProp";

function RenderPropSelect() {
  const selectRef = useRef<HTMLDivElement>(null);
  const handleChange = (option: OptionType) => {
    console.log(`${option.name}: API /${option.id}`);
  };
  const handleSelectClose = () => focusOnButton(selectRef);

  return (
    <Select selectRef={selectRef} defaultOption={options[0]} onSelectChange={handleChange} onSelectClose={handleSelectClose}>
      {({ isOpened, selectedOption, buttonProps, optionsProps, optionProps }) => {
        return (
          <div className="select" ref={selectRef}>
            <label className="select-label">Render Prop: </label>
            <button className="select-button" {...buttonProps}>
              {selectedOption.name}
            </button>
            {isOpened && (
              <ul className="select-options" {...optionsProps}>
                {options.map((option: OptionType) => (
                  <li key={option.id} className={`select-option${selectedOption.id === option.id ? " selected" : ""}`} data-id={option.id} {...optionProps}>
                    {option.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      }}
    </Select>
  );
}

export default RenderPropSelect;
