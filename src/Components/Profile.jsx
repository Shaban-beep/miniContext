import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'
UserContext

function Profile() {
    // profile mn values dalni han,mtlb leni kesy han
    const {user} = useContext(UserContext)
 if (!user) return <div>Please Login</div>
    return <div>Welcome {user.username}</div>
}
export default Profile
