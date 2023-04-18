import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import { useSelector } from 'react-redux';
// import { authenticateConstants } from '../../store/reducers/authenticate/actions'

function AdminPortal() {
    const { userData } = useSelector((state) => state.authenticate);

    return (
        <div>
            <ol>
                {userData.map((item, index) => {
                    return (
                        <li key={index} className="taskRow">
                            {item.name}
                        </li>
                    )
                }
                )}
            </ol>
        </div>
    )
}

export default AdminPortal;