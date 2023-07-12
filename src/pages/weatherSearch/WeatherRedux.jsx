import { useState } from 'react';
import  {useSelector, useDispatch} from 'react-redux';
import './weather.css';
import fetchWeatherAction from "../../redux/slices/weather/weatherThunk";

function WeatherRedux() {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleCityChange = (value) => {
        setCity(value);
    }

    const weatherData = useSelector(state => state.weather);
    const { weather } = weatherData;

    // console.log("hieee")

    // const weatherData = useSelector(state => state);
    // const { extraReducers } = weatherData;
    // const { weather } = extraReducers;
     
    // console.log('state', extraReducers)
    
    const resetData = () => {
        setCity('')
    }

    const getWeatherData = () => {
        dispatch(fetchWeatherAction(city))
    }

    return (
        <div className="weatherWrap">
            <div className="heading">
                Weather
            </div>
            <div className="container">
                <div className='inputWrap'>
                    <div className='inputEle'>
                        <input
                            type="text"
                            id="city"
                            placeholder="Enter City Name"
                            value={city}
                            onChange={(event) => handleCityChange(event.target.value)}
                        />
                    </div>

                    <div className='searchBox' onClick={() => getWeatherData()}>
                        Search
                    </div>
                    <div className='searchBox' onClick={() => resetData()}>
                        Reset
                    </div>
                </div>


                {(weather && weather.name) && (
                    <div className="weatherContainer">
                        <div className="weatherEle">City Name :- {weather?.name}</div>
                        <div className="weatherEle">Temperature :- {weather?.main?.temp}°C</div>
                        <div className="weatherEle">Description :- {weather?.weather[0]?.description}</div>
                        <div className="weatherEle"><img src={`http://openweathermap.org/img/w/${weather?.weather[0]?.icon}.png`} alt='weather icon' /></div>
                        <div className="weatherEle"> Wind speed:- {weather?.wind?.speed} Km/h</div>
                        <div className="weatherEle"> Humidity :- {weather?.main?.humidity}%</div>
                    </div>
                )
                }

            </div>
        </div>

    )
}

export default WeatherRedux;