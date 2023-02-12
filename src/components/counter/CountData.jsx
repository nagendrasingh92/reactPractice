import  {useSelector} from 'react-redux'
function CounterData() {
    const data = useSelector((state) => state.counter );
return (
    <div>text
        {data?.counterCount}
       
    </div>
)
}

export default CounterData
