import { createContext, MouseEvent } from "react";
import { OptionType } from "../type";

type SelectContextType = {
  isOpened: boolean;
  toggle: {
    (): void;
    on(): void;
    off(): void;
  };
  selectedOption: OptionType | null;
  changeSelectedOption: (option: OptionType) => void;
  changeFocusedOption: (option: OptionType | null) => void;
};

const toggleDefault = () => {};
toggleDefault.on = () => {};
toggleDefault.off = () => {};

const defaultContext = {
  isOpened: false,
  toggle: toggleDefault,
  selectedOption: null,
  changeSelectedOption: (option: OptionType) => {},
  changeFocusedOption: (option: OptionType | null) => {},
};

const SelectContext = createContext<SelectContextType>(defaultContext);

export default SelectContext;
