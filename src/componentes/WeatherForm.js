import { useContext, useState } from "react"
import { WeatherContextState } from "../WeatherContext/ContextWeather"
import { Dias } from "./Dias"
import Forecast from "./Forecast"
import "./WeatherForm.css"

const initialForm = {
ciudad:"",
}

const WeatherForm = () => {
    const {search, weather, city, loading, hourly, handleSearch} = useContext(WeatherContextState);
    const [form, setForm] = useState(initialForm);

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(!form.ciudad){
            alert("Datos incompletos")
            return;
        }

        handleSearch(form);
        setForm(initialForm);
    };
    return (
        <div className="containerForm">
            <form onSubmit={handleSubmit}>
                <input className="search-form" type="text" name="ciudad" placeholder="Ciudad..." onChange={handleChange} value={form.ciudad} />
                <input className="button" type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default WeatherForm
