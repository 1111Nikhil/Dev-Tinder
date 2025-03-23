import { createSlice } from "@reduxjs/toolkit";

// ✅ Correctly retrieve saved users from localStorage
const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

const initialState = savedUsers; // ✅ Initial state is an array

const CardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCards: (state, action) => {
      const newUsers = action.payload; // ✅ Get new user data
      localStorage.setItem("users", JSON.stringify(newUsers)); // ✅ Save users to localStorage
      return newUsers; // ✅ Update Redux state with new users
    },
  },
});

export const { addCards } = CardSlice.actions;
export default CardSlice.reducer;
