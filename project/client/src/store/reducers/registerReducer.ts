import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Userdb } from "../../interface";

interface RegisterState {
  users: Userdb[];
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
    addUser: (state, action: PayloadAction<Userdb>) => {
      state.users.push(action.payload);
      fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      })
        .then(() => {
          state.success = true;
        })
        .catch((error) => console.error("Error:", error));
    },
  },
});

export const registerReducer = registerSlice.reducer;
export const { addUser } = registerSlice.actions;
