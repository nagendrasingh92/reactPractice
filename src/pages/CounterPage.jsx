import  {useSelector, useDispatch} from 'react-redux';
import {counterConstants} from '../store/reducers/counter/actions';
import CounterData from '../components/counter/CountData';
function CounterPage() {
    const data = useSelector((state) => state.counter );
    const dispatch = useDispatch();
    console.log('data', data);

    const handleCount = (type) => {
        switch(type){
            case 'ADD':
                dispatch({type:  counterConstants.UPDATE, payload: data?.counterCount +1 })
                break;
            case 'SUB':
                dispatch({type:  counterConstants.UPDATE, payload: data?.counterCount -1 })
                break;
            case 'RESET':
                dispatch({type:  counterConstants.RESET, payload: {} });
                break;
            default: 
                break;
        }
    }
return (
    <div>text
        {data?.counterCount}  
        child data  <CounterData />
        <div onClick={() => handleCount('ADD')}>Add</div>
        <div onClick={() => handleCount('SUB')}>Subtract</div>
        <div onClick={() => handleCount('RESET')}>RESET</div>
    </div>
)
}

export default CounterPage
