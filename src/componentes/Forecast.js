import { Dias } from "./Dias"
import { Tiempo } from "./Tiempo";
import "./Forecast.css"
import { useContext } from "react";
import { WeatherContextState } from "../WeatherContext/ContextWeather";

const Forecast = ({hora}) => {
    const {search, weather, city, loading, hourly, handleSearch} = useContext(WeatherContextState);
    if (!weather || !city) return null;
    return (
        <div className="fondo">
            <Tiempo city={city} hora={hora}/>
            <Dias weather={weather.list}/>
        </div>
    )
}

export default Forecast
