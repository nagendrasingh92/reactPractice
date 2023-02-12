import  {useSelector} from 'react-redux'
function WeatherData() {
    const data = useSelector((state) => state.weather );
return (
    <div>text
        {data?.counterCount}
       
    </div>
)
}

export default WeatherData
