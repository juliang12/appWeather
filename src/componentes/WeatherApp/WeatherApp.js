import { useContext } from "react"
import { WeatherContextState } from "../../weatherContext/ContextWeather";
import Forecast from "../Forecast/Forecast";
import Loader from "../Loader/Loader";
import Stats from "../Stats/Stats";
import WeatherForm from "../WeatherForm/WeatherForm";
import "./WeatherApp.css"


const WeatherApp = () => {
const {state, loading} = useContext(WeatherContextState);

    const {city, search, weather} = state;
    const {dt} = city;


      const isDay = new Date(dt * 1000).getHours();
    //console.log(isDay, "hora")

    return (
        <div className={isDay < 6 || isDay < 18 ? "day" : "nigth" }>
            
            {loading && <Loader/>}
            <WeatherForm />
        
            {search && !loading && 
            <Forecast />}  
              
            {search && weather &&
            <Stats />}
        </div>
    )
}

export default WeatherApp