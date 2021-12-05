import './App.css';
import WeatherApp from './componentes/WeatherApp/WeatherApp';
import { WeatherContext } from './weatherContext/ContextWeather';

function App() {
  return (
    
      <WeatherContext>
      <WeatherApp/>
      </WeatherContext>

  );
}

export default App;
