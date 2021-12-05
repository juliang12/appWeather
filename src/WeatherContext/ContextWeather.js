import { useEffect, useReducer, useState } from "react";
import { createContext } from "react";
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

        setLoading(true);

            try {
        let daysFetch = fetch(daysUrl),
        weatherFetch = fetch(apiUrl),
        hourlyFetch = fetch(apiHourly)
        const [daysRes, apiRes, hourlyRes] = await Promise.all([
            daysFetch, 
            weatherFetch,
            hourlyFetch
        ]),

        daysData = await daysRes.json(),
        apiData = await apiRes.json(), 
        hourlyData = await hourlyRes.json(); 
        

        dispatch({type: TYPES.WEATHER_DATA, payload:daysData})
        dispatch({type: TYPES.CITY_DATA, payload: apiData})
        dispatch({type: TYPES.HOURLY_DATA, payload: hourlyData})

            } catch (error) {
              console.log(error)
            }
            finally{
               setLoading(false); 
            }

        
    }
       fetchData();
    }, [search])

    const handleSearch = (data)=>{
        //console.log(data, "datos")
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