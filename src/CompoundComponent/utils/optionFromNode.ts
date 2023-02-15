const optionFromNode = (node: ChildNode) => {
  if (!(node instanceof HTMLElement)) return;

  const id = node.dataset.id;
  const name = node.textContent;
  if (!id || !name) return;

  return { id, name };
};

export default optionFromNode;
