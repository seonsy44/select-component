import Select from "./CompoundComponent";
import type { OptionType } from "./CompoundComponent/type";
import "./styles/select.css";

function App() {
  const handleChange = (option: OptionType) => {
    console.log(`${option.name}: API /${option.id}`);
  };

  return (
    <div className="App">
      <Select
        className="select"
        onSelectChange={handleChange}
        defaultOption={{ id: "js", name: "JavaScript" }}
      >
        <Select.Button className="select-button">hello wolrd</Select.Button>
        <Select.Options className="select-options">
          <Select.Option className="select-option" id="default" name="all" />
          <Select.Option className="select-option" id="js" name="JavaScript" />
          <Select.Option className="select-option" id="react" name="ReactJS" />
        </Select.Options>
      </Select>
    </div>
  );
}

export default App;
