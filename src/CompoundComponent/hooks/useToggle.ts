import { useState } from "react";

type Props = {
  onOpen?: () => void;
  onClose?: () => void;
};

function useToggle({ onOpen, onClose }: Props) {
  const [isOpened, setIsOpened] = useState(false);

  const toggle = () => {
    if (isOpened && onClose) onClose();
    else if (!isOpened && onOpen) onOpen();

    setIsOpened(!isOpened);
  };

  toggle.on = () => {
    if (onOpen) onOpen();
    setIsOpened(true);
  };

  toggle.off = () => {
    if (onClose) onClose();
    setIsOpened(false);
  };

  return { isOpened, toggle };
}

export default useToggle;
