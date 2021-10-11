import { useReducer, useEffect } from "react";

const useLocalStorageReducer = (key, reducer, defaultValue) => {
  const [state, dispatch] = useReducer(
    reducer,
    localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : defaultValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);
  return [state, dispatch];
};

export default useLocalStorageReducer;
