import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "./UserSlice"; // Import the Redux action
import { Link, useNavigate } from "react-router";


const Login = () => {
  const [email, setEmail] = useState("henry.hill@x.dummyjson.com");
  const [password, setPassword] = useState("henryhpass");
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Fetch users when component loads
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/users");
        console.log("Fetched Users:", res.data.users); // Correct logging
        setUsers(res.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Handle Login & Dispatch User to Redux
  const handleLogin = () => {
    // Find user by matching email & password
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      console.log("Login Successful", matchedUser);
      dispatch(loginUser(matchedUser)); // Update Redux with authenticated user
      navigate('/')
    } else {
      console.error("Invalid email or password");
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="flex justify-center items-center my-10">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title">Welcome</h2>
          <label>Email:</label>
          <input
            className="h-8"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            className="h-8"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button  className="btn btn-primary my-5" onClick={handleLogin}>
               Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
