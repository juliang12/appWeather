import { useContext } from "react";
import "../componentes/Dias.css"
import { WeatherContextState } from "../WeatherContext/ContextWeather";

export const Dias = () => {

    const {search, weather, city, loading, hourly, handleSearch} = useContext(WeatherContextState);


    const filtrado = weather.list.slice(0, 6)

  

    return (
        <div className="lista">
            {filtrado.map((el, index)=>(
                <div className="container-days" key={index}>
                    <div className="temp-main">{Math.round(el.main.temp)}°</div>
                     <div className="icon__container"><img className="icon2" src={`http://openweathermap.org/img/wn/${el.weather[0].icon}.png`} alt="" /></div>
                    <div className="dt-text">{el.dt_txt.slice(11, 16)}hs</div>
                    </div>
            ))}
            
        </div>
        
    )
    
}



