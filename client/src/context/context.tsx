import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { ITripData } from "../interfaces/tripData";

interface AppState {
  waiting: boolean;
  data: ITripData | null;
  inputText: string;
  days: number;
}

type AppActions =
  | { type: "SET_WAITING"; payload: boolean }
  | { type: "SET_DATA"; payload: ITripData | null }
  | { type: "SET_INPUT_TEXT"; payload: string }
  | { type: "SET_DAYS"; payload: number };

const initialState: AppState = {
  waiting: false,
  data: null,
  inputText: "",
  days: 0,
};

const AppContext = createContext<
  | {
      state: AppState;
      dispatch: React.Dispatch<AppActions>;
    }
  | undefined
>(undefined);

const appReducer = (state: AppState, action: AppActions): AppState => {
  switch (action.type) {
    case "SET_WAITING":
      return { ...state, waiting: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_INPUT_TEXT":
      return { ...state, inputText: action.payload };
    case "SET_DAYS":
      return { ...state, days: action.payload };
    default:
      return state;
  }
};

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Something went wrong.");
  }
  return context;
};
