import { useState } from 'react';
import  { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './arrayOfObjects.css';
import { arrayConstants } from '../store/reducers/arrayOfObjects/actions'


function ArrayOfObjectsRedux() {
    const { arrayData } = useSelector((state) => state.array );
    const dispatch = useDispatch();

    const [filterVal, setFilterVal] = useState('');
    const [searchApiData, setSearchApiData] = useState([]);

    const arrayContainer = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/todos`)
            .then((res) => {
                dispatch({type:  arrayConstants.UPDATE, payload: res.data })

                setSearchApiData(res.data)
            });
    }

    console.log('hello')

    const handleSearchValue = (event) => {
        console.log("value", event.target.value)
        
        setFilterVal(event.target.value)
    }

    const handleFilter = () => {
        if (filterVal === '') {
            dispatch({type:  arrayConstants.UPDATE, payload: searchApiData })
        } else {
            const filterResult = searchApiData.filter(item => item.title.toLowerCase().includes(filterVal.toLowerCase()))
            dispatch({type:  arrayConstants.UPDATE, payload: filterResult })
        }
    }



    return (
        <div className='tableWrap'>
            <div className='tableHeading'>
                Get data from API.
            </div>

            <div className='getBttnWrap'>
                <span>To load table click on </span><span className='getBttn' onClick={() => arrayContainer()}>Get Data</span>
            </div>
            <div className='searchWrap'>
                <input
                    placeholder='Search'
                    className="searchBarInput"
                    type="text"
                    value={filterVal}
                    onChange={(event) => handleSearchValue(event)} />
                    <div className='searchBttn' onClick={() => handleFilter()}>
                        Search
                    </div>
            </div>

            <table className='arrayContent'>
                <thead>
                    <tr>
                        <th>user id</th>
                        <th>id</th>
                        <th>title</th>
                        <th>completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arrayData.map((item, index) => {
                            return (<tr key={index}>
                                <td>{item.userId}</td>
                                <td>{item.id}</td>
                                <td className='title'>{item.title}</td>
                                <td>{item.completed ? 'yes' : 'no'}</td>
                            </tr>)
                        }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ArrayOfObjectsRedux;