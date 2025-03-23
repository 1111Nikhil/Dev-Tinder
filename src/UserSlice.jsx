import { createSlice } from "@reduxjs/toolkit";

// Get saved user data from localStorage
const savedUser = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  user: savedUser, // Load user data from localStorage
  isAuthenticated: !!savedUser, // Check if user is logged in
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload)); // ✅ Save to localStorage
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user"); // ✅ Remove from localStorage on logout
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
