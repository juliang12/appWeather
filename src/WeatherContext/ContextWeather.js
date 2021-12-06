import { useReducer, useState } from "react";
import { createContext } from "react";
import { initialState, reducer} from "../reducer/reducer";

const WeatherContextState = createContext();

const WeatherContext = ({children}) =>{

    const [state, dispatch] = useReducer(reducer, initialState)
    const [loading, setLoading] = useState(false);
 
    return(
        <WeatherContextState.Provider value={{state, dispatch, setLoading, loading}}>
            {children}
        </WeatherContextState.Provider>
    );
};

export {WeatherContext, WeatherContextState};