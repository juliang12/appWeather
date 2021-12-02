import './App.css';
import WeatherSearch from './componentes/WeatherSearch/WeatherSearch';
import { WeatherContext } from './weatherContext/ContextWeather';

function App() {
  return (
    
      <WeatherContext>
      <WeatherSearch/>
      </WeatherContext>

  );
}

export default App;
