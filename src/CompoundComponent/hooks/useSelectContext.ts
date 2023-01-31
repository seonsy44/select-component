import { useContext } from "react";
import { SelectContext } from "./useSelect";

const useSelectContext = () => useContext(SelectContext);

export default useSelectContext;
