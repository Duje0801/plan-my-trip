import React, { createContext, useContext, useReducer, ReactNode } from "react";

//The navOption is used when choosing whether we want to see the itinerary, the map, or both on the screen. 0 - both,
//1 - itinerary only, 2 - map only. The difference is that on narrower screens, we can only see one of the itinerary
//or map at a time.

//Selected day is used when we want to mark the location on the map that is visited on a specific day (red circle).

interface AppState {
  navOption: number;
  selectedDay: number;
  resetMap: boolean;
}

type AppActions =
  | { type: "SET_NAV_OPTION"; payload: number }
  | { type: "SET_SELECTED_DAY"; payload: number }
  | { type: "SET_RESETMAP"; payload: boolean };

const initialState: AppState = {
  navOption: 0,
  selectedDay: -1,
  resetMap: true,
};

const TripContext = createContext<
  | {
      tripState: AppState;
      tripDispatch: React.Dispatch<AppActions>;
    }
  | undefined
>(undefined);

const appReducer = (state: AppState, action: AppActions): AppState => {
  switch (action.type) {
    case "SET_NAV_OPTION":
      return { ...state, navOption: action.payload };
    case "SET_SELECTED_DAY":
      return { ...state, selectedDay: action.payload };
    case "SET_RESETMAP":
      return { ...state, resetMap: action.payload };
    default:
      return state;
  }
};

export const TripContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tripState, tripDispatch] = useReducer(appReducer, initialState);

  return (
    <TripContext.Provider value={{ tripState, tripDispatch }}>
      {children}
    </TripContext.Provider>
  );
};

export const useTripContext = () => {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error("Something went wrong.");
  }
  return context;
};
