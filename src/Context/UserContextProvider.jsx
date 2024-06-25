import React from 'react'
import UserContext from './UserContext'

const UserContextProvider= ({children}) => {
    const [user, setUser] = React.useState(null)
    // user se koe bi value leny ya us mn koe bi value add krny k liye setUser use hoga
  return (
    <UserContext.Provider value={{user, setUser}}>
    {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider

//hooks ko use krty howy control krna components ko==>