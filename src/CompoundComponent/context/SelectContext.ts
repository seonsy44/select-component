import { createContext, MouseEvent } from "react";
import { OptionType } from "../type";

type SelectContextType = {
  isOpened: boolean;
  toggle: (action?: "open" | "close" | MouseEvent<HTMLButtonElement>) => void;
  selectedOption: OptionType | null;
  changeSelectedOption: (option: OptionType) => void;
  changeFocusedOption: (option: OptionType | null) => void;
};

const defaultContext = {
  isOpened: false,
  toggle: (action?: "open" | "close" | MouseEvent<HTMLButtonElement>) => {},
  selectedOption: null,
  changeSelectedOption: (option: OptionType) => {},
  changeFocusedOption: (option: OptionType | null) => {},
};

const SelectContext = createContext<SelectContextType>(defaultContext);

export default SelectContext;
