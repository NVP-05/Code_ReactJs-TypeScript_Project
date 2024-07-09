import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interface";

interface RegisterState {
  users: User[];
  success: boolean;
}

const initialState: RegisterState = {
  users: [],
  success: false,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
      fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      })
      .catch((error) => console.error("Error:", error));
    },
    setSuccess: (state, action: PayloadAction<boolean>) => {
      state.success = action.payload;
    },
    resetSuccess: (state) => {
      state.success = false;
    },
  },
});

export const { addUser, setSuccess, resetSuccess } = registerSlice.actions;
export const registerReducer = registerSlice.reducer;
