import { useEffect } from "react";

const useOnClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClick = () => {
      if (!ref.current) return;

      if (!ref.current.contains(event.target)) callback();

      document.addEventListener("mousedown", handleClick);

      return () => document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);
};
