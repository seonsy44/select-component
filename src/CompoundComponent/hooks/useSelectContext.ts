import { useContext } from "react";
import SelectContext from "../context/SelectContext";

const useSelectContext = () => useContext(SelectContext);

export default useSelectContext;
