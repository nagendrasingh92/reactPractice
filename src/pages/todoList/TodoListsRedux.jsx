
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import './todoLists.scss'
import { todoListsConstants } from '../../store/reducers/todoLists/actions'
import Button from '@mui/material/Button';


function TodoListsRedux() {
    const { todoData } = useSelector((state) => state.todoLists);
    const dispatch = useDispatch();
    const [inputTask, setInputTask] = useState('');
    const { authenticateUser } = useSelector((state) => state.authenticate);

    const handleInput = (value) => {
        setInputTask(value);
    };

    const handleTask = () => {
        if (inputTask) {
            dispatch({
                type: todoListsConstants.UPDATE,
                payload: [...todoData, {userId: `${authenticateUser.id}`, id: Date.now(), title: inputTask, status: false, isEdit: false, tempTitle: inputTask }]
            })
            console.log('valueaad',todoData)
            setInputTask('');
        } else {
            alert('please enter task')
        }
    };

    const deleteItem = (itemId) => {
        console.log("id", itemId)
        let temp = todoData.filter((item) => {
            return item.id !== itemId;
        });
        dispatch({
            type: todoListsConstants.UPDATE,
            payload: temp
        })

    };

    const editItem = (id) => {
        console.log("id edit", id);
        let templist = [...todoData];
        let updatedList = templist.map((item) => {
            if (item.id === id) {
                item.isEdit = true;
                item.tempTitle = item.title;
            }
            return item;
        })
        dispatch({ type: todoListsConstants.UPDATE, payload: updatedList })

    }

    const handleEdit = (id, value) => {
        //setEditTask(value);
        let templist = [...todoData];
        let updatedList = templist.map((item) => {
            if (item.id === id) {
                item.tempTitle = value;
            }
            return item;
        })
        dispatch({ type: todoListsConstants.UPDATE, payload: updatedList })
    }

    const saveItem = (id) => {
        let templist = [...todoData];
        let updatedList = templist.map((item) => {
            if (item.id === id) {
                item.isEdit = false;
                item.title = item.tempTitle;
            }
            return item;
        })
        dispatch({ type: todoListsConstants.UPDATE, payload: updatedList })
    }

    const cancelItem = (id) => {
        let templist = [...todoData];
        let updatedList = templist.map((item) => {
            if (item.id === id) {
                item.isEdit = false;
            }
            return item;
        })
        dispatch({ type: todoListsConstants.UPDATE, payload: updatedList })
    }



    return (
        <div className='todoListsPageWrap'>
            <div>
                <div>Username: {authenticateUser.name}</div>
                <div>Email-Id: {authenticateUser.email}</div>

                {console.log('valeu', authenticateUser)}
            </div>
            <div className='todoListsWrap'>
                <div className='inputWrap'>
                    <input
                        placeholder='Enter Task'
                        value={inputTask}
                        name='todoListInput'
                        onChange={(event) => handleInput(event.target.value)}
                    />
                </div>
                <Button variant="contained" className='submitBttn' onClick={() => handleTask()}>Submit</Button>
            </div>
            <div className="taskContainerWrap">
                <ol>
                    {todoData.filter((item) => item.userId === authenticateUser.id).map((item, index) => {
                        return (
                            <li key={index} className="taskRow">
                                {!item.isEdit ? (
                                    <>
                                        <span>{item.title}</span>
                                        <span>
                                            <Button
                                                variant="contained"
                                                className="todoDelete"
                                                onClick={() => deleteItem(item.id)}
                                            >Delete
                                            </Button>
                                        </span>
                                        <span>
                                            <Button
                                                variant="contained"
                                                className="todoEdit"
                                                onClick={() => editItem(item.id)}
                                            >Edit
                                            </Button>
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <input
                                            value={item.tempTitle}
                                            onChange={(event) => handleEdit(item.id, event.target.value)}
                                        />
                                        <span>
                                            <Button
                                                variant="contained"
                                                className="save"
                                                onClick={() => saveItem(item.id)}
                                            >Save
                                            </Button>
                                        </span>
                                        <span>
                                            <Button
                                                variant="contained"
                                                className="cancel"
                                                onClick={() => cancelItem(item.id)}
                                            >Cancel
                                            </Button>
                                        </span>
                                    </>
                                )}
                            </li>
                        )
                    }
                    )}
                </ol>
            </div>
        </div>

    )
}

export default TodoListsRedux;