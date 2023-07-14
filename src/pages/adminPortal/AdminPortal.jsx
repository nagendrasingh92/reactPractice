import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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


import { userInforSchema } from './userInfoSchema';
import './adminPortal.scss';

import { setUserList, setOpen, setEditId, addUser, deleteUser, resetForm } from '../../redux/slices//adminPortal/adminPortalSlice'

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

// import { authenticateConstants } from '../../store/reducers/authenticate/actions'

function AdminPortal() {
    const dispatch = useDispatch();
    const { userList, open, editId } = useSelector((state) => state.adminPortal);

    const handleClickOpen = () => {
        dispatch(setOpen(true));
    };

    const handleClose = () => {
        dispatch(setOpen(false));
    };

    const handleSubmitForm = (values) => {
    dispatch(addUser(values));
    }

    const formik = useFormik({
        initialValues: {
            firstName: null,
            lastName: null,
            email: null,
        },
        validationSchema: userInforSchema,
        onSubmit: handleSubmitForm,
    });

    useEffect(() => {
        const { resetForm } = formik;
        if (!open) {
            dispatch(resetForm());
        }
    }, [open, dispatch, formik]);

    useEffect(() => {
        if (editId) {
            const { setFieldValue } = formik;
            const temp = userList.find((item) => item.id === editId);
            setFieldValue('firstName', temp.firstName)
            setFieldValue('lastName', temp.lastName)
            setFieldValue('email', temp.email)
        }
    }, [editId, userList, formik]);

    const handleEdit = (id) => {
        dispatch(setEditId(id));
        dispatch(setOpen(true))
    };

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };

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
                                    label="First Name"
                                    variant="outlined"
                                    name="firstName"
                                    type="firstName"
                                    onChange={formik.handleChange}
                                    value={formik.values.firstName}
                                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                    helperText={formik.touched.firstName && formik.errors.firstName}
                                />
                                <TextField
                                    style={{ margin: 10 }}
                                    label="Last Name"
                                    variant="outlined"
                                    name="lastName"
                                    type="lastName"
                                    onChange={formik.handleChange}
                                    value={formik.values.lastName}
                                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                    helperText={formik.touched.lastName && formik.errors.lastName}
                                />
                                <TextField
                                    style={{ margin: 10 }}
                                    label="Email Address"
                                    variant="outlined"
                                    name="email"
                                    type="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
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
                                <StyledTableCell >First Name</StyledTableCell>
                                <StyledTableCell >Last Name</StyledTableCell>
                                <StyledTableCell >Email Id</StyledTableCell>
                                <StyledTableCell >Update</StyledTableCell>
                                <StyledTableCell >Remove</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {console.log('userList', userList)}
                            {userList.map((item) => (
                                <StyledTableRow key={item.id}>
                                    <StyledTableCell component="th" scope="row">
                                        {item.id}
                                    </StyledTableCell>
                                    <StyledTableCell >{item.firstName}</StyledTableCell>
                                    <StyledTableCell >{item.lastName}</StyledTableCell>
                                    <StyledTableCell >{item.email}</StyledTableCell>

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