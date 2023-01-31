import { useState } from 'react';
import axios from 'axios';
function Weather() {
    const [weather, setWeather] = useState('');
    const [city, setCity] = useState('');

    const handleCityChange = (value) => {
        console.log('value', value)
        setCity(value)
    }

    const getWeatherData = async () => {
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=70796e6346b6279389b2c9bb362df985`)
            .then((res) => {
                console.log('res', res)
                setWeather(res.data)
            });
    }

    return (
        <div className="body">
            <div className="container">
                <form id="input">
                    <input
                        type="text"
                        id="city"
                        placeholder="Enter City Name"
                        value={city}
                        onChange={(event) => handleCityChange(event.target.value)} />
                    <div onClick={() => getWeatherData()}>Search</div>
                </form>
                <div id="weatherContainer">
                    <div>City Name :- <span >{weather?.name}</span></div>
                    <div>Temperature :- <span >{weather?.main?.temp}°C</span></div>
                    <div>Description :- <span >{weather?.description}</span></div>
                    <div> Humidity :- <span ></span></div>
                    <div> wind :- <span ></span></div>
                </div>
            </div>
        </div>

    )
}

export default Weather;