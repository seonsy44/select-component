import Select from "./CompoundComponent";
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
  const handleChange = (option: OptionType) => {
    console.log(`${option.name}: API /${option.id}`);
  };

  return (
    <div className="App">
      <Select
        className="select"
        onSelectChange={handleChange}
        defaultOption={options[0]}
      >
        <Select.Button className="select-button">hello wolrd</Select.Button>
        <Select.Options className="select-options">
          {options.map(({ id, name }) => (
            <Select.Option
              className="select-option"
              id={id}
              name={name}
              key={id}
            />
          ))}
        </Select.Options>
      </Select>
    </div>
  );
}

export default App;
