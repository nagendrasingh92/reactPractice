
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import './todoLists.scss'
import { todoListsConstants } from '../store/reducers/todoLists/actions'


function TodoListsRedux() {
    const { todoData } = useSelector((state) => state.todoLists);
    const dispatch = useDispatch();
    const [inputTask, setInputTask] = useState('');

    const handleInput = (value) => {
        setInputTask(value);
    };

    const handleTask = () => {
        if (inputTask) {
            dispatch({
                type: todoListsConstants.UPDATE,
                payload: [...todoData, { id: Date.now(), title: inputTask, status: false, isEdit: false, tempTitle: inputTask }]
            })
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
            <div className='todoListsWrap'>
                <div className='inputWrap'>
                    <input
                        placeholder='Enter Task'
                        value={inputTask}
                        name='todoListInput'
                        onChange={(event) => handleInput(event.target.value)}
                    />
                </div>
                <div
                    className='submitBttn'
                    onClick={() => handleTask()}>Submit
                </div>
            </div>
            <div className="taskContainerWrap">
                <ol>
                    {todoData.map((item, index) => {
                        return (
                            <li key={index} className="taskRow">
                                {!item.isEdit ? (
                                    <>
                                        <span>{item.title}</span>
                                        <span
                                            className="todoDelete"
                                            onClick={() => deleteItem(item.id)}>Delete
                                        </span>
                                        <span
                                            className="todoEdit"
                                            onClick={() => editItem(item.id)}>Edit
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <input
                                            value={item.tempTitle}
                                            onChange={(event) => handleEdit(item.id, event.target.value)}
                                        />
                                        <span
                                            className="save"
                                            onClick={() => saveItem(item.id)}
                                        >Save

                                        </span>
                                        <span
                                            className="cancel"
                                            onClick={() => cancelItem(item.id)}
                                        >Cancel
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