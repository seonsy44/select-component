import CompoundComponent from "./component/compoundComponentSelect";
import CustomHookSelect from "./component/customHookSelect";
import RenderPropSelect from "./component/renderPropSelect";
import "./styles/select.css";

function App() {
  return (
    <div className="app">
      <CompoundComponent />
      <RenderPropSelect />
      <CustomHookSelect />
    </div>
  );
}

export default App;
