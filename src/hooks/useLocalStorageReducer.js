import { useReducer, useEffect } from "react";

const useLocalStorageReducer = (key, defaultValue, reducer) => {
  const [state, dispatch] = useReducer(
    reducer,
    () => localStorage.getItem(key) || defaultValue
  );

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [state, key]);
  return [state, dispatch];
};

export default useLocalStorageReducer;
