import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'
import { useSelector } from 'react-redux'

const ReduxUserList = () => {
    const users = useSelector((state)=> state.user.users);

  return (
    <div className='ReduxUserList'>
        <p>ReduxUserList</p>

        <ul>
            {users.map((user, index)=>(
                <li key={index}>
                    {user.uid}, {user.name}, {user.age}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ReduxUserList