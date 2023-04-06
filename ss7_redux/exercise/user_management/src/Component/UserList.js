import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllUser, deleteUser} from "../redux/action/userList";
import {useNavigate} from 'react-router-dom'

function UserList() {
    const navigate = useNavigate();
    const users = useSelector(state => state.users)
    const dispatch = useDispatch();
    console.log(users)

    useEffect(() => {
        console.log("Error");
        dispatch(getAllUser());
    }, []);

    return (
        <>
            <h2>User List</h2>
            <table className='table'>
                <thead>
                <tr>
                    <th scope='col'>Id</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Website</th>
                    <th scope='col'>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((value, index) => (
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.website}</td>
                            <td>
                                <button type='button' className='btn btn-danger'
                                        onClick={() => dispatch(deleteUser(users.id))}>DELETE
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}

export default UserList;