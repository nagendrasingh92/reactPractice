import { useState } from 'react';
import axios from 'axios';
import './weather.css'
function Weather() {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('');

    const handleCityChange = (value) => {
        console.log('value', value)
        setCity(value)
    }

    const getWeatherData = async () => {
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=70796e6346b6279389b2c9bb362df985&units=metric`)
            .then((res) => {
                console.log('res', res)
                setWeather(res.data)
            });
    }

    return (
        <div className="weatherWrap">
            <div className="heading">
                Weather update
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
                </div>


                {weather && (
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

export default Weather;