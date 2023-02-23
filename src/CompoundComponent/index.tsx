import React, { useMemo } from "react";

import Button from "./ui/Button";
import Option from "./ui/Option";
import Options from "./ui/Options";
import Label from "./ui/Label";
import SelectContext from "./context/SelectContext";
import useToggle from "./hooks/useToggle";
import useSelectedOption from "./hooks/useSelectedOption";
import useFocusedOption from "./hooks/useFocusedOption";
import useClickAway from "./hooks/useClickAway";
import type { OptionType } from "./type";

type Props = {
  children: React.ReactNode;
  selectRef: React.RefObject<HTMLDivElement>;
  defaultOption: OptionType;
  onSelectChange: (option: OptionType) => void;
  onSelectOpen?: () => void;
  onSelectClose?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

function Select({
  children,
  selectRef,
  defaultOption,
  onSelectChange,
  onSelectOpen,
  onSelectClose,
  ...attributes
}: Props) {
  const { isOpened, toggle } = useToggle({ onOpen: onSelectOpen, onClose: onSelectClose });
  const { selectedOption, changeSelectedOption } = useSelectedOption({ defaultOption, onSelectChange, toggle });
  const { changeFocusedOption } = useFocusedOption({ selectedOption, selectRef, isOpened });
  useClickAway({ ref: selectRef, handleClick: toggle.off });

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
