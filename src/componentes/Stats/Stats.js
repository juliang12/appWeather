import { useContext } from 'react';
import "../Stats/Stats.css"

import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
import { WeatherContextState } from '../../weatherContext/ContextWeather';


const Stats = () => {
  const {weather} = useContext(WeatherContextState);

  const {list} = weather;

  const weatherData = list.map(day =>({
    dayHour: day.dt_txt.slice(11,16),
    max: Math.round(day.main.temp_max),
    min: Math.round(day.main.temp_min),

  }))
  
  return (
	  <div className="container_stats">
		   <ResponsiveContainer height={250} width={'95%'}>
			<LineChart
				data={weatherData}
				margin={{ top: 20, bottom: 20, left: 5, right: 5 }}
			>
				<XAxis dataKey="dayHour" />
				<YAxis />
				<CartesianGrid />
				<Line type="monotone" stroke="#000"  dataKey="min"></Line>
				<Line type="monotone" stroke= "#fff" dataKey="max"></Line>	
				<Legend/>
        <Tooltip />
			</LineChart>
		</ResponsiveContainer>
	  </div>
   
);

}

export default Stats
