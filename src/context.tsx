import React, { useContext, useReducer } from "react";

const initialState = {
  quantity: 0,
  cart: 0,
  price: 125,
};

const reducer = (
  state: typeof initialState = initialState,
  action: { type: string }
) => {
  if (action.type === "INCREASE") {
    return { ...state, quantity: state.quantity + 1 };
  } else if (action.type === "DECREASE") {
    if (state.quantity === 0) {
      return state;
    }
    return { ...state, quantity: state.quantity - 1 };
  } else if (action.type === "ADD_TO_CART") {
    return { ...state, cart: state.quantity };
  } else if (action.type === "CLEAR_CART") {
    return { ...state, cart: 0 };
  } else {
    return state;
  }
};

type AppContextType = {
  state: typeof initialState;
  dispatch: React.Dispatch<{
    type: string;
  }>;
};

const AppContext = React.createContext<AppContextType>({} as AppContextType);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
