import { useEffect, useState } from "react";

const useFetch = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendReq = async (url, method, body, action) => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(url, {
        method: method,
        body: body ? JSON.stringify(body) : null,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res?.status === 200) {
        action?.();
        return await res.json();
      }
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { error, loading, sendReq };
};
