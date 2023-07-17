import { useSelector } from 'react-redux';


function UserDetails() {
    const { authenticateUser } = useSelector((state) => state.authenticate);

    return (
        <div className='userDetailsWrap'>
            <div className='userDetailBorder'>
                <div className='userDetail'>User Details</div>
                <div>Username: {authenticateUser.name}</div>
                <div>Email-Id: {authenticateUser.email}</div>
            </div>
        </div>
    )
}

export default UserDetails;