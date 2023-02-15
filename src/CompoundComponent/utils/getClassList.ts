const getClassList = (...classes: any[]) => {
  const classList: String[] = [];
  classes.forEach((name) => {
    if (typeof name === "string") classList.push(name);
  });

  return classList.length ? classList.join(" ") : undefined;
};

export default getClassList;
