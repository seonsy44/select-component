import { useRef } from "react";

import Select from "./CompoundComponent";
import focusOnButton from "./CompoundComponent/utils/focusOnButton";
import type { OptionType } from "./CompoundComponent/type";
import "./styles/select.css";

const options = [
  { id: "js", name: "JavaScript" },
  { id: "react", name: "ReactJS" },
  { id: "next", name: "NextJS" },
  { id: "html", name: "HTML" },
  { id: "css", name: "CSS" },
];

function App() {
  const selectRef = useRef<HTMLDivElement>(null);
  const handleSelectClose = () => focusOnButton(selectRef);
  const handleChange = (option: OptionType) => {
    console.log(`${option.name}: API /${option.id}`);
  };

  return (
    <div className="App">
      <Select
        className="select"
        selectRef={selectRef}
        defaultOption={options[0]}
        onSelectChange={handleChange}
        onSelectClose={handleSelectClose}
      >
        <Select.Label className="select-label">Frontend: </Select.Label>
        <Select.Button className="select-button" />
        <Select.Options className="select-options">
          {options.map(({ id, name }) => (
            <Select.Option className="select-option" id={id} name={name} key={id} />
          ))}
        </Select.Options>
      </Select>
    </div>
  );
}

export default App;
