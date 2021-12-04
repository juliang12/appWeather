const TYPES = {
    SEARCH_DATA : "SEARCH_DATA",
    WEATHER_DATA : "WEATHER_DATA",
    HOURLY_DATA : "HOURLY_DATA",
    CITY_DATA : "CITY_DATA",
}


const initialState = {
    search: "",
    weather: "",
    hourly: null,
    city: {},
}


const reducer = (state, action)=>{
    switch (action.type) {
        case TYPES.SEARCH_DATA:
            const allSearch = action.payload;
            const newSearch = {...state.search, ...allSearch};
            return {
                ...state,
                search: newSearch,
            };
            case TYPES.WEATHER_DATA:
                const allWeather = action.payload;
                const newData = {...state.weather, ...allWeather};
                return{
                    ...state,
                    weather: newData,
                }
                case TYPES.CITY_DATA:
                    const allCityData = action.payload;
                    const newState = {...state.city, ...allCityData};
                    return{
                        ...state,
                        city: newState
                    }
                    case TYPES.HOURLY_DATA:
                        const allHourlyData = action.payload;
                        const newHourly = {
                            ...state.hourly, ...allHourlyData
                        };
                        return{
                            ...state,
                            hourly: newHourly
                        }
            default :
            return state
    }
}


export {reducer, initialState, TYPES}