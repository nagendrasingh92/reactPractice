import { useState } from 'react';
import axios from 'axios';
import './arrayOfObjects.css';

function ArrayOfObjects() {
    const [arrayEle, setarrayEle] = useState([]);
    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const arrayContainer = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/todos`)
            .then((res) => {
                console.log('res', res)
                setarrayEle(res.data)
            });
    }

    


    return (
        <div>
            <div onClick={() => arrayContainer()}>Get data</div>
            <label htmlFor="search">
                Search by Task:
                <input id="search" type="text" onClick={handleSearch} />
            </label>

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
                        arrayEle.map((item, index) => {
                            return (<tr key={index}>
                                <td>{item.userid}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
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

export default ArrayOfObjects;