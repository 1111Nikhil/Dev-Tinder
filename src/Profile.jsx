import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector((store) => store.user); 
  console.log(user)
  return (
    <div className="">
     <div className="avatar bg-transparent">
  <div className="w-24 rounded-full">
    <img src={user.Image} />
  </div>
  <h1 className=''>{user.firstname},{user.lastname}</h1>
</div>
    </div>
  )
}

export default Profile