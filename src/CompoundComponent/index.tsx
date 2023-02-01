import React from "react";

import Button from "./ui/Button";
import Option from "./ui/Option";
import Options from "./ui/Options";
import useSelect, { SelectContext } from "./hooks/useSelect";
import type { OptionType } from "./type";

type Props = {
  children: React.ReactNode;
  defaultOption?: OptionType;
  onSelectChange: (option: OptionType) => void;
} & React.HTMLAttributes<HTMLDivElement>;

function Select({ children, defaultOption, onSelectChange, className }: Props) {
  const value = useSelect({ defaultOption, onSelectChange });

  return (
    <SelectContext.Provider value={value}>
      <div className={className}>{children}</div>
    </SelectContext.Provider>
  );
}

Select.Button = Button;
Select.Options = Options;
Select.Option = Option;

export default Select;
