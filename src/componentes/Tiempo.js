import { useContext } from "react";
import { WeatherContextState } from "../WeatherContext/ContextWeather";
import "./Tiempo.css"

export const Tiempo = ({ hora}) => {
    const {search, weather, city, loading, hourly, handleSearch} = useContext(WeatherContextState);
    const {name, main} = city;

    return (
        <div className="clima">
            <div className="location-box">
            <div className="location">{name}</div>
            <div className="date">{hora}</div>
            </div>
            <div className="weather-box">
           
            <div className="imagen">
                 <img className="icono" src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`} alt="" />
                 </div>     
            <div className="description">{city.weather[0].description}</div>
            <div className="temp">{Math.round(main.temp)}°</div>
            <div className="humidity">
                {main.humidity}%
            </div>
            <div className="temperaturas">
                <div className="temp__min">
                    Min: {Math.round(main.temp_min)}°
                    </div>
                    <div className="temp__max">
                    Max: {Math.round(main.temp_max)}°
                    </div>
            </div>
         
            </div>
        </div>
    )
}
