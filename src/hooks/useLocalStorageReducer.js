import { useReducer, useEffect } from "react";

const useLocalStorageReducer = (key, reducer, defaultValue) => {
  const [state, dispatch] = useReducer(reducer, defaultValue, () => {
    const valueInLocalStorage = localStorage.getItem(key);
    if (valueInLocalStorage) {
      return JSON.parse(valueInLocalStorage);
    }
    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);
  return [state, dispatch];
};

export default useLocalStorageReducer;
