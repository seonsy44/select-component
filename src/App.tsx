import { useRef } from "react";

import useSelect from "./CustomHook";
import focusOnButton from "./CustomHook/utils/focusOnButton";
import "./styles/select.css";
import type { OptionType } from "./type";

const options = [
  { id: "js", name: "JavaScript" },
  { id: "react", name: "ReactJS" },
  { id: "next", name: "NextJS" },
  { id: "html", name: "HTML" },
  { id: "css", name: "CSS" },
];

function App() {
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
    <div className="App">
      <div className="select" ref={selectRef}>
        <label className="select-label">Frontend: </label>
        <button className="select-button" {...buttonProps}>
          {selectedOption.name}
        </button>

        {isOpened && (
          <ul className="select-options" {...optionsProps}>
            {options.map((option: OptionType) => (
              <li
                key={option.id}
                data-id={option.id}
                className={`select-option${selectedOption?.id === option.id ? " selected" : ""}`}
                {...optionProps}
              >
                {option.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
