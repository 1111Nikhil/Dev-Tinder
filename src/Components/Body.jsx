import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router'
import Footer from './Footer'
import { useSelector } from 'react-redux'



const Body = () => {
  const user = useSelector((store)=>store.user);
  console.log(user)
  const navigate = useNavigate();
  useEffect(() => {
  if (!user.isAuthenticated) {
    navigate('/')
 }},[user.isAuthenticated,navigate])
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>    
    </>
  )
}

export default Body  