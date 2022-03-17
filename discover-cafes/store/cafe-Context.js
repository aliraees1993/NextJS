import { createContext, useReducer } from "react";

export const CafeContext = createContext();
export const ACTION_TYPES = {
    SET_LAT_LONG: "SET_LAT_LONG",
    SET_CAFES: "SET_CAFES",
};

const cafeReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_LAT_LONG: {
            return { ...state, latLong: action.payload.latLong };
        }
        case ACTION_TYPES.SET_CAFES: {
            return { ...state, cafes: action.payload.cafes };
        }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

const CafeProvider = ({ children }) => {
    const initialState = {
        latLong: "",
        cafes: [],
    };

    const [state, dispatch] = useReducer(cafeReducer, initialState);

    return (
        <CafeContext.Provider value={{ state, dispatch }}>
            {children}
        </CafeContext.Provider>
    );
};

export default CafeProvider;
