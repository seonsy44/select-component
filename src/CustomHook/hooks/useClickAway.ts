import React, { useEffect } from "react";

type Props = {
  ref: React.RefObject<HTMLElement>;
  handleClick: (e: Event) => void;
};

const useClickAway = ({ ref, handleClick }: Props) => {
  useEffect(() => {
    const handleDocumentClick = (e: Event) => {
      const node = ref.current;
      const doc = node?.ownerDocument || document;

      if (!(e.target instanceof Node)) return;
      if (doc.documentElement.contains(e.target) && !node?.contains(e.target)) {
        handleClick(e);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [ref.current]);
};

export default useClickAway;
