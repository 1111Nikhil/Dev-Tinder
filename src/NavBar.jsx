import React from 'react'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from './UserSlice'

const NavBar = () => {
  const user = useSelector((store)=>store.user)
  const dispatch = useDispatch();
  console.log(user)
  return (
    <div className="navbar bg-base-300 shadow-sm">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">DevTinder</a>
    </div>
  {user.isAuthenticated && <div className="flex gap-2">
    <h3 className="my-auto w-24 md:w-auto text-white" >{user?.user?.firstName}</h3>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mx-5">
        <div className="w-10 rounded-full ">
          <img
            alt="Tailwind CSS Navbar component"
            src={user?.user?.image}/>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
          </Link>
        </li>
        <li><Link to="/setting">Setting</Link></li>
        <li onClick={() => dispatch(logoutUser())}><Link to="/Login">Logout</Link></li>
      </ul>
    </div>
  </div>}
  </div>
  )
}

export default NavBar