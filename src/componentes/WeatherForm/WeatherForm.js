import { useContext, useState } from "react"
import { WeatherContextState } from "../../weatherContext/ContextWeather"
import "../WeatherForm/WeatherForm.css"
import Swal from 'sweetalert2'

const initialForm = {
ciudad:"",
}

const WeatherForm = () => {
    const {handleSearch} = useContext(WeatherContextState);
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
            return Swal.fire({
                title: 'Error!',
                text: 'Escriba algo por favor',
                icon: 'error',
              })
        }
        //console.log(form, "info form")
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
