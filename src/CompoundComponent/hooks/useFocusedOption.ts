import { useEffect, useState } from "react";

import type { OptionType } from "../../type";
import focusOnOption from "../utils/focusOnOption";

type Props = {
  selectedOption: OptionType;
  selectRef: React.RefObject<HTMLDivElement>;
  isOpened: boolean;
};

function useFocusedOption({ selectedOption, selectRef, isOpened }: Props) {
  const [focusedOption, setFocusedOption] = useState<OptionType | null>(selectedOption);

  const changeFocusedOption = (option: OptionType | null) => {
    setFocusedOption(option);
  };

  useEffect(() => {
    focusOnOption(selectRef, focusedOption);
  }, [focusedOption]);

  useEffect(() => {
    if (isOpened) {
      setFocusedOption(selectedOption);
    } else {
      setFocusedOption(null);
    }
  }, [isOpened]);

  return { changeFocusedOption };
}

export default useFocusedOption;
