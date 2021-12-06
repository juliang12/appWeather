import { Hours } from "../Hours/Hours"
import { Weather } from "../Weather/Weather";
import { useContext } from "react";
import { WeatherContextState } from "../../weatherContext/ContextWeather";

const Forecast = () => {
    const { state} = useContext(WeatherContextState);
    const {weather, city} = state;

    if (!weather || !city) return null;
    return (
        <div className="fondo">
            <Weather />
            <Hours />
        </div>
    )
}

export default Forecast