import { useContext, useEffect, useState } from "react"
import { helpHttp } from "../helpers/helpHttp";
import { WeatherContextState } from "../WeatherContext/ContextWeather";
import Forecast from "./Forecast";
import Loader from "./Loader";
import Stats from "./Stats";
import WeatherForm from "./WeatherForm";
import "./WeatherSearch.css"


const WeatherSearch = () => {
const {search, weather, city, loading, hourly, handleSearch} = useContext(WeatherContextState);

    const {dt} = city;

      const hora =  new Date(dt * 1000).toLocaleTimeString("es-Es");

      const isDay = new Date(dt * 1000).getHours();
console.log(isDay)

    return (
        <div className={isDay < 6 || isDay < 18 ? "day" : "nigth" }>
            {loading && <Loader/>}
            <WeatherForm />
            
            {search && !loading && 
            <Forecast />}  

            {search && weather &&
            <Stats isDay={isDay} />}
        </div>
    )
}

export default WeatherSearch
