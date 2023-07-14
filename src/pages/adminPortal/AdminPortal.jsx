import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from "formik";
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { updateUserList } from '../../redux/slices/authenticate/authenticateSlice';


import { userInforSchema } from './userInfoSchema';
import './adminPortal.scss';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function AdminPortal() {
    const { userData } = useSelector((state) => state.authenticate);
    const dispatch = useDispatch();
    console.log('userData',userData);
    // const [userList, setUserList] = useState([])
    const [open, setOpen] = useState(false);
    const [editId, setEditId] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmitForm = (values) => {
        let userEntry = { ...values};
        let temp = userData.find((item) => item.email === userEntry.email);

        if (editId) {
            let editTemp = userData.map((item) => {
                if (item.id === editId) {
                    return {
                        ...item,
                        name: userEntry.name,
                        email: userEntry.email,
                        password: userEntry.password,
                    };   
                }
                return item;
            });
            console.log('editTemp',editTemp)

            dispatch(updateUserList(editTemp));

            // setUserList(editTemp);
            setEditId(null);
        } else if (!temp) {
            let id = Date.now().toString(36) + Math.random().toString(36).substr(2);
            let userContainer = [...userData, { ...userEntry, id: id }]
            dispatch(updateUserList(userContainer));

            // setUserList(userContainer);
        } else {
            alert('Already exist.')
        }
        setOpen(false)
    }

    const formik = useFormik({
        initialValues: {
            name: null,
            email: null,
            password: null,
        },
        validationSchema: userInforSchema,
        onSubmit: handleSubmitForm,
    });

    useEffect(() => {
        const { resetForm } = formik;
        if (!open) {
            setEditId(null)
            resetForm()
        }
    }, [open])

    useEffect(() => {
        if (editId) {
            const { setFieldValue } = formik;
            let temp = userData.find((item) => item.id === editId);
            setFieldValue('name', temp.name)
            setFieldValue('email', temp.email)
            setFieldValue('password', temp.password)
        }
    }, [editId])

    const handleEdit = (id) => {
        //let editData = userList.find((item) => item.id === id);
        setEditId(id)
        //setEditData(editData)
        setOpen(true)
        //setIsEdit(true)
    }

    const handleDelete = (id) => {
        let deleteTemp = userData.filter((item) => {
            return (
                item.id !== id
            )
        })
        dispatch(updateUserList(deleteTemp));

        // setUserList(deleteTemp);
    }
    return (
        <div className='userInfoWrap'>
            <div>
                <div className='userInfoHeadWrap'>
                    <div className='headerTitle'>
                        <h4>Admin Portal</h4>
                    </div>
                    <div>
                        <Button variant="contained" onClick={handleClickOpen}>
                            New User
                        </Button>
                    </div>
                </div>

                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>User Form</DialogTitle>
                    <DialogContent >
                        <form onSubmit={formik.handleSubmit} >
                            <div>
                                <TextField
                                    style={{ margin: 10 }}
                                    label="Name"
                                    variant="outlined"
                                    name="name"
                                    type="name"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                />
                                <TextField
                                    style={{ margin: 10 }}
                                    label="Email"
                                    variant="outlined"
                                    name="email"
                                    type="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                                <TextField
                                    style={{ margin: 10 }}
                                    label="Password"
                                    variant="outlined"
                                    name="password"
                                    type="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />
                            </div>
                            <Button variant="contained" type="submit" >Save</Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
            <div className='userDetails'>
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Id</StyledTableCell>
                                <StyledTableCell >Name</StyledTableCell>
                                <StyledTableCell >Email</StyledTableCell>
                                <StyledTableCell >Password</StyledTableCell>
                                <StyledTableCell >Update</StyledTableCell>
                                <StyledTableCell >Remove</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {console.log('userData', userData)}
                            {userData.map((item) => (
                                <StyledTableRow key={item.id}>
                                    <StyledTableCell component="th" scope="row">
                                        {item.id}
                                    </StyledTableCell>
                                    <StyledTableCell >{item.name}</StyledTableCell>
                                    <StyledTableCell >{item.email}</StyledTableCell>
                                    <StyledTableCell >{item.password}</StyledTableCell>

                                    <StyledTableCell >
                                        <Button variant="contained" onClick={() => handleEdit(item.id)} >Edit</Button>
                                    </StyledTableCell>
                                    <StyledTableCell >
                                        <Button variant="contained" onClick={() => handleDelete(item.id)}>Delete</Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>


        </div>
    )
}

export default AdminPortal;