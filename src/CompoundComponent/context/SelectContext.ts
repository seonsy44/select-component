import { createContext, MouseEvent } from "react";
import { OptionType } from "../type";

type SelectContextType = {
  isOpened: boolean;
  toggle: (action?: "open" | "close" | MouseEvent<HTMLButtonElement>) => void;
  selectedOption: OptionType | null;
  changeSelectedOption: (option: OptionType) => void;
  changeFocusedOption: (option: OptionType) => void;
};

const SelectContext = createContext<SelectContextType | null>(null);

export default SelectContext;
