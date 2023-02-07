import React, { useMemo, useRef } from "react";

import Button from "./ui/Button";
import Option from "./ui/Option";
import Options from "./ui/Options";
import Label from "./ui/Label";
import SelectContext from "./context/SelectContext";
import useToggle from "./hooks/useToggle";
import useSelectedOption from "./hooks/useSelectedOption";
import useFocusedOption from "./hooks/useFocusedOption";
import type { OptionType } from "./type";

type Props = {
  children: React.ReactNode;
  defaultOption: OptionType;
  onSelectChange: (option: OptionType) => void;
} & React.HTMLAttributes<HTMLDivElement>;

function Select({ children, defaultOption, onSelectChange, ...attributes }: Props) {
  const selectRef = useRef<HTMLDivElement>(null);
  const { isOpened, toggle } = useToggle();
  const { selectedOption, changeSelectedOption } = useSelectedOption({ defaultOption, onSelectChange, toggle });
  const { changeFocusedOption } = useFocusedOption({ selectedOption, selectRef, isOpened });

  const value = useMemo(
    () => ({
      isOpened,
      toggle,
      selectedOption,
      changeSelectedOption,
      changeFocusedOption,
    }),
    [isOpened, selectedOption]
  );

  return (
    <SelectContext.Provider value={value}>
      <div {...attributes} ref={selectRef}>
        {children}
      </div>
    </SelectContext.Provider>
  );
}

Select.Button = Button;
Select.Options = Options;
Select.Option = Option;
Select.Label = Label;

export default Select;
