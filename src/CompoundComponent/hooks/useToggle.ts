import { MouseEvent, useState } from "react";

function useToggle() {
  const [isOpened, setIsOpened] = useState(false);

  const toggle = (action?: "open" | "close" | MouseEvent<HTMLButtonElement>) => {
    if (action === "open") setIsOpened(true);
    else if (action === "close") setIsOpened(false);
    else setIsOpened(!isOpened);
  };

  return { isOpened, toggle };
}

export default useToggle;
