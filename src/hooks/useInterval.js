import { useRef, useEffect } from "react";

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCallback.current?.();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
};
