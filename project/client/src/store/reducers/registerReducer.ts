import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interface";

interface RegisterState {
  users: User[];
}

const initialState: RegisterState = {
  users: [],
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
      console.log(action.payload);
      
      // Save to db.json
      fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      }).catch((error) => console.error("Error:", error));
    },
  },
});

export const { addUser } = registerSlice.actions;
export const registerReducer = registerSlice.reducer;
