import { useContextWhitRedux, Context } from "./useRedux";

export const ContextProvider = ({ children }) => {
  const { state, listReducers } = useContextWhitRedux();

  return (
    <Context.Provider value={{ ...state, ...listReducers }}>
      {children}
    </Context.Provider>
  );
};
