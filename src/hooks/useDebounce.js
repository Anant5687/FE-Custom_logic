import { useEffect, useState } from "react";

const useDeBounce = (value, delay) => {
  const [query, setQuery] = useState(value);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setQuery(value);

      setLoading(false);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return { query, loading };
};

export default useDeBounce;
