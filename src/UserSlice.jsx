import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  user: null, // Stores logged-in user
  isAuthenticated: false, // Tracks login status
};

// Redux Slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

// Export actions
export const { loginUser, logoutUser } = userSlice.actions;

// Export reducer
export default userSlice.reducer;
