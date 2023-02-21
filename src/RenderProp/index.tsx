type Props = {
  children: () => JSX.Element;
};

function Select({ children }: Props) {
  if (!children || typeof children !== "function") return null;

  return children();
}

export default Select;
