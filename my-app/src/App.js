import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <div className="container">
      <div className="weatherapp"></div>
      <h1>How's the weather?</h1>

      <div className="row1">
        <div className="col-sm-5">
          <form id="searchform-city">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search your favorite place"
                id="input-city"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div id="map"></div>
        </div>
        <div className="col-6">
          <h2 className="card-title">
            The weather for <br /><span id="city">Amsterdam</span>
          </h2>
          <span id="today"> </span><br />
          <p>
            <span id="accentbig"
              ><span id="degrees"></span>&deg<span id ="celcius">C
              </span> <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon" className="icon"/></span
            >
            <ul>
            <li className="weatherdescription">test </li>
            <li>Windspeed: <span id="windspeed"> </span>m/h</li>
           <li>Humidity: <span id="humidity"> </span>%</li> 
            </ul>
          </p>
        </div>
      </div>
       <h3 className="forecast5">
            Forecast
          </h3>
    <div className="5dayforecast" id="forecast">
    </div>
    </div>
    
      <div className="row">
        <div className="col-12">
    
  <p className="footer">This project was coded by Esmée Zootjes and is open-sourced on <a href="https://github.com/esmeecodes/WTW-WhatsTheWeather" alt="Github link">GitHub</a> and hosted on <a href="https://hardcore-heyrovsky-506709.netlify.app/" alt="Netlify link"> Netlify</a>.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
