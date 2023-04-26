import {createContext, useState} from 'react'

export const userContext = createContext()

export const UserProvider = (props) => {
    // Set up our state
    const [userList, setUserList] = useState([])
    return (
        // return UserProvider with state
        <userContext.Provider value={{
            userList,
            setUserList
        }}>
            {props.children}
        </userContext.Provider>
    )
}