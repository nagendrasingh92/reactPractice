import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodoData } from "../../redux/slices/todoList/todoListsSlice";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import './todoLists.scss';
import { useEffect } from "react";

function TodoApp() {
  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.todo.todoData);
  const { authenticateUser } = useSelector((state) => state.authenticate);



  const [userInput, setUserInput] = useState('');
  const [taskContainer, setTaskContainer] = useState([]);
  const [filterVal, setFilterVal] = useState('');
  const [taskSearchFilter, setTaskSearchFilter] = useState([]);
  const [taskStatus, setTaskStatus] = useState('all');

  const [isEdit, setIsEdit] = useState(false);
  const [checked, setChecked] = useState([0]);


  useEffect(() => {
    const userTasks = todoData.filter(
      (task) => task.userId === authenticateUser.id
    );
    setTaskContainer([...userTasks]);
    setTaskSearchFilter([...userTasks])

  }, [userInput]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);

    const tempTaskList = taskContainer.map((item) => {
      if (item.id === value.id) {
        item.status = item.status === 'completed' ? 'pending' : 'completed';
      }
      return item
    })
    dispatch(updateTodoData(tempTaskList));
    setTaskContainer(tempTaskList);
    setTaskSearchFilter(tempTaskList);
  };

  const handleChange = (value) => {
    setUserInput(value)
  }

  const handleTask = () => {
    let similarTask = taskContainer.filter(
      (item) => item.taskText.toLowerCase() === userInput.toLowerCase()
    );
    if (userInput === '') {

      alert('please enter the task')

    } else if (isEdit) {

      let tempTaskList = [...taskContainer];
      let editObj = tempTaskList.find((item) => item.isEdit)
      editObj.taskText = userInput;
      editObj.isEdit = false;
      setIsEdit(false);

      dispatch(updateTodoData(editObj));
      setTaskContainer(tempTaskList);
      setTaskSearchFilter(tempTaskList);

    } else if (similarTask && !similarTask.length) {

      let Id = (new Date().getTime()).toString(36)
      let taskTemp = {
        id: Id,
        taskText: userInput,
        isEdit: false,
        editTask: userInput,
        status: 'pending',
        userId: authenticateUser?.id,
      };
      dispatch(updateTodoData(taskTemp));
      // setTaskContainer(taskTemp);
      // setTaskSearchFilter(taskTemp);
      taskTemp = '';
    } else {
      alert('Task Already exists.')
    }
    setUserInput('')
  }

  const handleEdit = (id) => {
    setIsEdit(true)
    let tempTaskList = [...taskContainer];
    let editTemp = tempTaskList.map((item) => {
      if (item.id === id) {
        item.isEdit = true;
        setUserInput(item.taskText)
      }
      return item
    })

    dispatch(updateTodoData([...editTemp]));
    setTaskContainer([...editTemp])
    setTaskSearchFilter([...editTemp])
  }

  const handleDelete = (id) => {
    let deleteTemp = taskContainer.filter((item) => {
      return (
        item.id !== id
      )
    })

    dispatch(updateTodoData(deleteTemp));
    setTaskContainer(deleteTemp);
    setTaskSearchFilter(deleteTemp);
  }

  const handleTaskCancel = () => {
    setIsEdit(false);
    setUserInput('')
  }

  const handleSearchValue = (event) => {
    setFilterVal(event.target.value)
  }

  const handleFilter = () => {
    if (filterVal === '') {
      setTaskSearchFilter(taskContainer)
    } else {
      const filterResult = taskContainer.filter(item => item.taskText.toLowerCase().includes(filterVal.toLowerCase()))
      console.log('filterResult', filterResult)
      setTaskSearchFilter([...filterResult])
    }
  }

  const handleStatusFilter = (event) => {
    let filter = event.target.value;
    setTaskStatus(filter)
    taskContainer.filter((item) => (filter !== 'all' ? item.status === filter : true))
  }

  return (
    <div className="todoAppWrap">
      <div className="todoTitle">
        <h2>Todo List App</h2>
      </div>
      <div className="taskInput">
        <input
          value={userInput}
          onChange={(event) => handleChange(event.target.value)}
          type='text'
          name='task'
          placeholder="New Task"
        />
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            className="taskButton"
            onClick={() => handleTask()}
          >
            {isEdit ? 'Save' : 'Add'}
          </Button>
          {isEdit ? (<Button variant="contained" className="taskButton" onClick={() => handleTaskCancel()}>{isEdit ? 'Cancle' : ''}</Button>) : ''}
        </Stack>
      </div>
      <div className="searchWrap">
        <div className="taskOperation">
          <Button variant="contained" className="taskButton" onClick={() => handleFilter()}>Search task</Button>
          <input
            placeholder="search"
            className="searchBarInput"
            type="text"
            value={filterVal}
            onChange={(event) => handleSearchValue(event)}
          />
          <select className="taskStatus" name="taskStatus" value={taskStatus} onChange={(event) => handleStatusFilter(event)}>
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {taskSearchFilter
          .filter((item) =>
          (taskStatus !== 'all' ? item.status === taskStatus : true
          )
          ).map((value, index) => {
            const labelId = `checkbox-list-label-${value.index}`;
            return (
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton edge="end" aria-label="comments">
                  </IconButton>
                }
                className="taskList"
                disablePadding
              >
                <ListItemButton role={undefined} onClick={handleToggle(value, value.id)} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={value.taskText} />
                </ListItemButton>
                <Button variant="contained" className="taskButton" onClick={() => handleEdit(value.id)}>Edit</Button>
                <Button variant="contained" className="taskButton" onClick={() => handleDelete(value.id)}>Delete</Button>
              </ListItem>
            );
          })}
      </List>
    </div>
  );
}

export default TodoApp;
