import React, { useEffect } from 'react'
import { fetchAllUsers } from '../store/slices/Users'
import { useDispatch, useSelector } from 'react-redux';

const UsersList = () => {

    const { list: Users } = useSelector(state => state.users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch])

    return (
        <div className='container'>
            <div className='row'>
                {
                    Users.map((user, index) => {
                        return (
                            <div key={index} className='col-md-3'>
                                <div className='card'>
                                    <img src={user.avatar} alt="avatar" />
                                    <div className='card-body'>
                                        <h5 className='card-title'>{`${user.first_name} ${user.last_name}`}</h5>
                                        <p className='card-text'>{user.email}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UsersList
