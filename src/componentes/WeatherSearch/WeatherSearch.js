import { useContext } from "react"
import { WeatherContextState } from "../../weatherContext/ContextWeather";
import Forecast from "../Forecast/Forecast";
import Loader from "../Loader/Loader";
import Stats from "../Stats/Stats";
import WeatherForm from "../WeatherForm/WeatherForm";
import "../WeatherSearch/WeatherSearch.css"


const WeatherSearch = () => {
const {search, weather, city, loading} = useContext(WeatherContextState);

    const {dt} = city;


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
