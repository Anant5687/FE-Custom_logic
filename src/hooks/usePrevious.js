import { useEffect, useRef } from "react";

const usePrevious = (value) => {
  const prevValue = useRef(null);

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return prevValue.current;
};
