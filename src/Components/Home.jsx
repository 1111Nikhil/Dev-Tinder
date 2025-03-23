import React from 'react'
import { useSelector } from 'react-redux'
import Cards from './Cards'

const Home = () => {
  const users = useSelector((store) => store.card);
  console.log(users)
  return (
    <div>
      {users.map((user) => <Cards key={user.id} data={user}/>)}
    </div>
  )
}

export default Home