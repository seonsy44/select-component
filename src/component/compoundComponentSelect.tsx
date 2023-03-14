import { useRef } from "react";

import Select from "../CompoundComponent";
import focusOnButton from "../utils/focusOnButton";
import options from "../consts/options";
import type { OptionType } from "../type";

function CompoundComponent() {
  const selectRef = useRef<HTMLDivElement>(null);
  const handleChange = (option: OptionType) => {
    console.log(`${option.name}: API /${option.id}`);
  };
  const handleSelectClose = () => focusOnButton(selectRef);

  return (
    <Select className="select" selectRef={selectRef} defaultOption={options[0]} onSelectChange={handleChange} onSelectClose={handleSelectClose}>
      <Select.Label className="select-label">Compound Component: </Select.Label>
      <Select.Button className="select-button" />
      <Select.Options className="select-options">
        {options.map(({ id, name }) => (
          <Select.Option className="select-option" id={id} name={name} key={id} />
        ))}
      </Select.Options>
    </Select>
  );
}

export default CompoundComponent;
