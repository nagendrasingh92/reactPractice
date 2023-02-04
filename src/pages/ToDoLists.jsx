import { useState } from 'react';
import './todoLists.css';

function ToDoLists() {
    const [inputTask, setInputTask] = useState('');
    const [taskContainer, setTaskContainer] = useState([]);

    const handleInput = (value) => {
        console.log("value", value);

        setInputTask(value);
        console.log("valuep", inputTask);

    }

    const handleTask = () => {
        if (inputTask){
            setTaskContainer(inputTask)
        } else {
            alert('please enter task')
        }
        console.log('array', taskContainer );
    }

    return (
        <div className='todoListsPageWrap'>
            <div className='todoListsWrap'>
                <div className='inputWrap'>
                    <input
                        placeholder='Enter Task'
                        value={inputTask}
                        name='todoListInput'
                        onChange={(event) => handleInput(event.target.value)}
                    />
                </div>


                <div className='submitbttn' onClick={() => handleTask()}>
                    Submit
                </div>
            </div>
        </div>

    )
}

export default ToDoLists;