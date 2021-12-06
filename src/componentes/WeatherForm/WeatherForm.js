import { useContext, useEffect, useState } from "react"
import { WeatherContextState } from "../../weatherContext/ContextWeather"
import "../WeatherForm/WeatherForm.css"
import Swal from 'sweetalert2'
import { TYPES } from "../../reducer/reducer"
import { handleFetch } from "../../services/handleFetch"

const initialForm = {
ciudad:"",
}

const WeatherForm = () => {
    const {state, dispatch, setLoading} = useContext(WeatherContextState);
    const {search} = state;
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        handleFetch({search, dispatch, setLoading})
     }, [search])

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
        dispatch({type: TYPES.SEARCH_DATA, payload:form});
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