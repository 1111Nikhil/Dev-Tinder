import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((store) => store.user.user);
 
  return (
    <div className="bg-base-100 p-4 max-w-xl mx-auto shadow-md rounded-lg">
      {/* Avatar and Name */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="avatar">
          <div className="w-20 h-20 rounded-full">
            <img src={user?.image} alt="User Avatar" />
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold">{user?.firstName} {user?.lastName}</h1>
          <p className=" text-sm">@{user?.username}</p>
        </div>
      </div>

      {/* Personal Details */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
        <span className="font-semibold">📅 Age:</span> <span>{user?.age}</span>
        <span className="font-semibold">📧 Email:</span> <span>{user?.email}</span>
        <span className="font-semibold">📞 Phone:</span> <span>{user?.phone}</span>
        <span className="font-semibold">🆔 SSN:</span> <span>{user?.ssn}</span>
        <span className="font-semibold">🎂 Birthdate:</span> <span>{user?.birthDate}</span>
        <span className="font-semibold">🩸 Blood Group:</span> <span>{user?.bloodGroup}</span>
        <span className="font-semibold">🎓 University:</span> <span>{user?.university}</span>
      </div>

      {/* Address Section */}
      <div className="mt-2">
        <h2 className="text-lg font-semibold border-b pb-1">🏠 Address</h2>
        <p className=" text-sm mt-1">{user?.address?.address}, {user?.address?.city}, {user?.address?.state}, {user?.address?.country} - {user?.address?.postalCode}</p>
      </div>

      {/* Work Details Section */}
      <div className="mt-2">
        <h2 className="text-lg font-semibold  border-b pb-1">💼 Work Details</h2>
        <p className="text-sm mt-1 font-semibold">{user?.company?.title}</p>
        <p className="text-sm">{user?.company?.department} at {user?.company?.name}</p>
        <p className="text-sm">📍 {user?.company?.address?.city}, {user?.company?.address?.state}, {user?.company?.address?.country} - {user?.company?.address?.postalCode}</p>
      </div>
    </div>
  );
};

export default Profile;
