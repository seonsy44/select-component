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
      <Select>
        {() => {
          return (
            <div className="select">
              <label className="select-label">Frontend: </label>
              <button className="select-button">button</button>
              <ul className="select-options">
                <li className="select-option">option</li>
              </ul>
            </div>
          );
        }}
      </Select>
    </div>
  );
}

export default App;
