import useSelect from "./CustomHook";
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

  const { isOpened, selectedOption } = useSelect({ defaultOption: options[0], onSelectChange: handleChange });

  return (
    <div className="App">
      <div className="select">
        <label className="select-label">Frontend: </label>
        <button className="select-button">select</button>

        <ul className="select-options">
          {options.map((option: OptionType) => (
            <li key={option.id} data-id={option.id} className="select-option">
              {option.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
