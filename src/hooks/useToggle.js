import { useState } from "react";

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((v) => !v);

  const setTrue = () => setValue(true);

  const setFalse = () => setValue(false);

  return {
    value,
    toggle,
    setTrue,
    setValue,
  };
};
