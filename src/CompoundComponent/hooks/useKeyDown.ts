import useSelectContext from "./useSelectContext";

function useKeyDown() {
  const { toggle } = useSelectContext() || {};

  const handleKeyDownOnButton = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if ((e.key === "ArrowDown" || e.key === "ArrowUp") && toggle) {
      toggle("open");
    }
  };

  const handleKeyDownOnLI = (e: React.KeyboardEvent<HTMLLIElement>) => {
    console.log(e);
  };

  return { handleKeyDownOnButton, handleKeyDownOnLI };
}

export default useKeyDown;
