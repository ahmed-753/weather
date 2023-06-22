import './style/style.scss'
import Header from "./componens/Header/Header";
import WeatherTop from "./componens/WeatherTop/WeatherTop";
import WeatherBottom from "./componens/WeatherBottom/WeatherBottom.jsx";
function App() {



  return (
    <div className="App">
      <Header/>
            <WeatherTop/>
            <WeatherBottom/>
    </div>
  );
}

export default App;
