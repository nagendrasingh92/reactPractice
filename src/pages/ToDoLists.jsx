import { useState } from "react";
import Button from '@mui/material/Button';
import './todoLists.css'

function TodoLists() {
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
            <div>
                To Do List
                <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
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
                <div
                    className='submitBttn'
                    onClick={() => handleTask()}>Submit
                </div>
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

export default TodoLists;