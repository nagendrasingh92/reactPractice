import { useState } from "react";
import Button from '@mui/material/Button';
import './todoLists.css'

function TodoList() {
    const [inputTask, setInputTask] = useState('');
    const [taskContainer, setTaskContainer] = useState([]);

    const handleInput = (value) => {
        setInputTask(value);

    };

    const handleTask = () => {
        if (inputTask) {
            setTaskContainer((taskEleTemp) => {
                return [...taskEleTemp, { id: Date.now(), title: inputTask, status: false, isEdit: false, tempTitle: inputTask }];
            });
            setInputTask('');
        } else {
            alert('please enter task')
        }
    };

    const deleteItem = (itemId) => {
        console.log("id", itemId)
        setTaskContainer((oldTask) => {
            return oldTask.filter((item) => {
                return item.id !== itemId;
            });
        });
    };

    const editItem = (id) => {
        console.log("id edit", id);
        let templist = [...taskContainer];
        let updatedList = templist.map((item) => {
            if (item.id === id) {
                item.isEdit = true;
                item.tempTitle = item.title;
            }
            return item;
        })
        setTaskContainer(updatedList)
    }

    const handleEdit = (id, value) => {
        //setEditTask(value);
        let templist = [...taskContainer];
        let updatedList = templist.map((item) => {
            if (item.id === id) {
                item.tempTitle = value;
            }
            return item;
        })
        setTaskContainer(updatedList)
    }

    const saveItem = (id) => {
        let templist = [...taskContainer];
        let updatedList = templist.map((item) => {
            if (item.id === id) {
                item.isEdit = false;
                item.title = item.tempTitle;
            }
            return item;
        })
        setTaskContainer(updatedList)
    }

    const cancelItem = (id) => {
        let templist = [...taskContainer];
        let updatedList = templist.map((item) => {
            if (item.id === id) {
                item.isEdit = false;
            }
            return item;
        })
        setTaskContainer(updatedList)

    }



    return (
        <div className='todoListsPageWrap'>
            <div className="todoHeader">
                To Do List
            </div>
            <div className='todoListsWrap'>
                <input
                    className='inputWrap'
                    placeholder='Enter Task'
                    value={inputTask}
                    name='todoListInput'
                    onChange={(event) => handleInput(event.target.value)}
                />
                <Button variant="contained" size="small" onClick={() => handleTask()}>Submit</Button>
            </div>
            <div className="taskContainerWrap">
                <ol>
                    {taskContainer.map((item, index) => {
                        return (
                            <li key={index} className="taskRow">
                                {!item.isEdit ? (
                                    <>
                                        <span>{item.title}</span>
                                        <span
                                            onClick={() => deleteItem(item.id)}>
                                            <Button variant="contained" size="small">Delete</Button>
                                        </span>
                                        <span
                                            onClick={() => editItem(item.id)}>
                                            <Button variant="contained" size="small">Edit</Button>
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <input
                                            value={item.tempTitle}
                                            onChange={(event) => handleEdit(item.id, event.target.value)}
                                        />
                                        <span
                                            onClick={() => saveItem(item.id)}>
                                            <Button variant="contained" size="small">Save</Button>

                                        </span>
                                        <span
                                            onClick={() => cancelItem(item.id)}>
                                            <Button variant="contained" size="small">Cancel</Button>
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

export default TodoList;