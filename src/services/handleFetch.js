import { TYPES } from "../reducer/reducer";

export function handleFetch({setLoading, dispatch, search }){
  

    if(search === "")return;
       

    const fetchData = async ()=>{
     const {ciudad} = search;
     let APIkey = "71eacde55b6bda6161ffc5753161a6a1"; 
     let daysUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&units=metric&appid=${APIkey}&lang=sp`;
     let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${APIkey}&lang=sp`;
     let apiHourly = `https://api.openweathermap.org/data/2.5/find?q=${ciudad}&appid=${APIkey}` 

     setLoading(true);

         try {
     let daysFetch = fetch(daysUrl),
     weatherFetch = fetch(apiUrl),
     hourlyFetch = fetch(apiHourly)
     const [daysRes, apiRes, hourlyRes] = await Promise.all([
         daysFetch, 
         weatherFetch,
         hourlyFetch
     ]),

     daysData = await daysRes.json(),
     apiData = await apiRes.json(), 
     hourlyData = await hourlyRes.json(); 
     

     dispatch({type: TYPES.WEATHER_DATA, payload:daysData})
     dispatch({type: TYPES.CITY_DATA, payload: apiData})
     dispatch({type: TYPES.HOURLY_DATA, payload: hourlyData})

         } catch (error) {
           console.log(error)
         }
         finally{
            setLoading(false); 
         }

     
 }
    fetchData();


}

