import './App.css';
import WeatherSearch from './componentes/WeatherSearch';
import { WeatherContext, WeatherContextState } from './WeatherContext/ContextWeather';

function App() {
  return (
    <div className="App">
      <WeatherContext>
      <WeatherSearch/>
      </WeatherContext>
    </div>
  );
}

export default App;
