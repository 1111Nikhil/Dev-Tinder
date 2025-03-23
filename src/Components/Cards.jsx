import React from 'react'
import UserProfile from './UserProfile';
import { useNavigate } from 'react-router';

const Cards = ({data}) => {
    const navigate = useNavigate();
    console.log(data)
    const HandelProfile = () => {
        navigate(`/home/${data.id}`);
    }
  return (
    <>
    <div className="card bg-base-200 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={data.image}
      alt="Users"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{data.username}</h2>
    <h5>{data.gender},{data.age}</h5>
    <h5>{data.email}</h5>
    <h5>{data.phone}</h5>
    <div className="card-actions">
      <button onClick={() => HandelProfile(data.id)} className="btn btn-primary">View</button>
    </div>
  </div>
</div>
</>
  )
}

export default Cards