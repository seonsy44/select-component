import { useEffect, useState } from "react";

import type { OptionType } from "../type";

type Props = {
  selectedOption: OptionType;
  selectRef: React.RefObject<HTMLDivElement>;
  isOpened: boolean;
};

function useFocusedOption({ selectedOption, selectRef, isOpened }: Props) {
  const [focusedOption, setFocusedOption] = useState<OptionType | null>(selectedOption);

  const changeFocusedOption = (option: OptionType) => {
    setFocusedOption(option);
  };

  const focusOnOption = () => {
    selectRef.current?.childNodes.forEach((node: ChildNode) => {
      if (node.nodeName !== "UL") return;

      node.childNodes.forEach((LI: ChildNode) => {
        if (!(LI instanceof HTMLElement)) return;

        if (LI.dataset.id === focusedOption?.id) {
          LI.focus();
        }
      });
    });
  };

  useEffect(() => {
    focusOnOption();
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
