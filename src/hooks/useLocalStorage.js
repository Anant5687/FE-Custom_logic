const useLocalStorage = () => {
  const setLocalStorage = (data, key) => {
    if (typeof data === "object") {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      localStorage.setItem(key, data);
    }
  };

  const getLocalStorage = (key) => {
    const value = localStorage.getItem(key);
    if (!value) return null;

    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  };

  const removeLocalStorage = (key) => {
    localStorage.removeItem(key);
  };

  return { setLocalStorage, getLocalStorage, removeLocalStorage };
};
