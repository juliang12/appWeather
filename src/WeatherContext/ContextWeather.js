import { useEffect, useReducer, useState } from "react";
import { createContext } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { initialState, reducer, TYPES } from "../reducer/reducer";



const WeatherContextState = createContext();

const WeatherContext = ({children}) =>{

    const [state, dispatch] = useReducer(reducer, initialState)
    const {search, weather, city, hourly} = state;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
       if(search === "")return;
       

       const fetchData = async ()=>{
        const {ciudad} = search;
        let APIkey = "71eacde55b6bda6161ffc5753161a6a1"; 
        let daysUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&units=metric&appid=${APIkey}&lang=sp`;
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${APIkey}&lang=sp`;
        let apiHourly = `https://api.openweathermap.org/data/2.5/find?q=${ciudad}&appid=${APIkey}` 
       console.log(daysUrl, apiUrl)
        setLoading(true);

        const [daysRes, apiRes, hourlyRes] = await Promise.all([
            helpHttp().get(daysUrl),
            helpHttp().get(apiUrl),
            helpHttp().get(apiHourly),
        ]);
        console.log(apiRes, daysRes, hourlyRes);

        dispatch({type: TYPES.WEATHER_DATA, payload:daysRes})
        //setWeather(daysRes);
        dispatch({type: TYPES.CITY_DATA, payload: apiRes})
        //setCity(apiRes)
        dispatch({type: TYPES.HOURLY_DATA, payload: apiHourly})
        //setHourly(hourlyRes)

        setLoading(false);
    }
       fetchData();
    }, [search])

    const handleSearch = (data)=>{
        console.log(data, "datos")
        dispatch({type: TYPES.SEARCH_DATA, payload:data});
    };

    const data = {search, weather, city, loading, hourly, handleSearch};

    return(
        <WeatherContextState.Provider value={data}>
            {children}
        </WeatherContextState.Provider>
    );
};

export {WeatherContext, WeatherContextState};