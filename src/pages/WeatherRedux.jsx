import { useState } from 'react';
import  {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import './weather.css'
import {weatherConstants} from '../store/reducers/weather/actions'
function WeatherRedux() {
    const { weatherData } = useSelector((state) => state.weather );
    const dispatch = useDispatch();
    const [city, setCity] = useState('');

    const handleCityChange = (value) => {
        setCity(value)
    }

    const getWeatherData = async () => {
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=70796e6346b6279389b2c9bb362df985&units=metric`)
            .then((res) => {
                console.log('res', res)
                dispatch({type:  weatherConstants.UPDATE, payload: res.data })
            });
    }

    const resetData = () => {
        setCity('')
        dispatch({type:  weatherConstants.UPDATE, payload: {} })
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


                {(weatherData && weatherData.name) && (
                    <div className="weatherContainer">
                        <div className="weatherEle">City Name :- {weatherData?.name}</div>
                        <div className="weatherEle">Temperature :- {weatherData?.main?.temp}°C</div>
                        <div className="weatherEle">Description :- {weatherData?.weather[0]?.description}</div>
                        <div className="weatherEle"><img src={`http://openweathermap.org/img/w/${weatherData?.weather[0]?.icon}.png`} alt='weather icon' /></div>
                        <div className="weatherEle"> Wind speed:- {weatherData?.wind?.speed} Km/h</div>
                        <div className="weatherEle"> Humidity :- {weatherData?.main?.humidity}%</div>
                    </div>
                )
                }

            </div>
        </div>

    )
}

export default WeatherRedux;