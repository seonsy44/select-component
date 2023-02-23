import Select from "./RenderProp";
import type { OptionType } from "./type";
import "./styles/select.css";

const options = [
  { id: "js", name: "JavaScript" },
  { id: "react", name: "ReactJS" },
  { id: "next", name: "NextJS" },
  { id: "html", name: "HTML" },
  { id: "css", name: "CSS" },
];

function App() {
  const handleChange = (option: OptionType) => {
    console.log(`${option.name}: API /${option.id}`);
  };

  return (
    <div className="App">
      <Select defaultOption={options[0]} onSelectChange={handleChange}>
        {({ isOpened, selectedOption, buttonProps, optionsProps, optionProps }) => {
          return (
            <>
              <label className="select-label">Frontend: </label>
              <button className="select-button" {...buttonProps}>
                {selectedOption.name}
              </button>
              {isOpened && (
                <ul className="select-options" {...optionsProps}>
                  {options.map((option: OptionType) => (
                    <li
                      key={option.id}
                      className={`select-option${selectedOption.id === option.id ? " selected" : ""}`}
                      data-id={option.id}
                      {...optionProps}
                    >
                      {option.name}
                    </li>
                  ))}
                </ul>
              )}
            </>
          );
        }}
      </Select>
    </div>
  );
}

export default App;
