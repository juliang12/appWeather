import { Days } from "../Days/Days"
import { Weather } from "../Weather/Weather";
import "../Forecast/Forecast.css"
import { useContext } from "react";
import { WeatherContextState } from "../../weatherContext/ContextWeather";

const Forecast = ({hora}) => {
    const { weather, city } = useContext(WeatherContextState);
    if (!weather || !city) return null;
    return (
        <div className="fondo">
            <Weather />
            <Days />
        </div>
    )
}

export default Forecast
