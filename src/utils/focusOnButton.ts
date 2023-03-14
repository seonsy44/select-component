const focusOnButton = (selectRef: React.RefObject<HTMLDivElement>) => {
  selectRef.current?.childNodes.forEach((node: ChildNode) => {
    if (node.nodeName !== "BUTTON" || !(node instanceof HTMLElement)) return;

    node.focus();
  });
};

export default focusOnButton;
