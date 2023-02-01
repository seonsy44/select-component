import { createContext } from "react";
import { OptionType } from "../type";

type SelectContextType = {
  isOpened: boolean;
  toggle: () => void;
  selectedOption: OptionType | null;
  onOptionClick: (option: OptionType) => () => void;
};

const SelectContext = createContext<SelectContextType | null>(null);

export default SelectContext;
