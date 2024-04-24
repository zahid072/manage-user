import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from '../layout/Root'
import UsersList from '../pages/usersList/UsersList'
import AddUser from '../pages/addUser/AddUser'

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"/",
                element:<UsersList/>
            },
            {
                path:"/addUser",
                element:<AddUser/>
            },
            {
                path:"/updateUser/:id",
                element:<AddUser/>
            },
        ]
    }
])

export default router
