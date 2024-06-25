import React from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {

  return(
    <UserContextProvider>
      <div className='item-center justify-center'>
      <h1 className='text-5xl font-semibold'>React With Chai and Share is Important</h1>
      <Login />
      <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App
