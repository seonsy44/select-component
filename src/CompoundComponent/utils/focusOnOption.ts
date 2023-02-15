import { OptionType } from "../type";

const focusOnOption = (selectRef: React.RefObject<HTMLDivElement>, focusedOption: OptionType | null) => {
  selectRef.current?.childNodes.forEach((node: ChildNode) => {
    if (node.nodeName !== "UL") return;

    node.childNodes.forEach((LI: ChildNode) => {
      if (!(LI instanceof HTMLElement)) return;

      if (!focusedOption) LI.blur();
      if (LI.dataset.id === focusedOption?.id) LI.focus();
    });
  });
};

export default focusOnOption;
