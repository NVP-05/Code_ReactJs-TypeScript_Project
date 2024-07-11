import { createSlice } from '@reduxjs/toolkit';
import { block, getAllUser, unBlock } from '../../service/admin.service';
import { Userdb } from '../../interface';


const stateUser: Userdb[] = []

const adminUserSlice = createSlice({
  name: 'adminUser',
  initialState: {
    user: stateUser
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getAllUser.fulfilled, (state, action)=> {
      state.user = action.payload
    })
    .addCase(block.fulfilled, (state, action) => {
      const index = state.user.findIndex((user: Userdb) => user.id === action.payload.id);
      if (index !== -1) {
        state.user[index] = action.payload;
      }
    })
    .addCase(unBlock.fulfilled, (state, action) => {
      const index = state.user.findIndex((user: Userdb) => user.id === action.payload.id);
      if (index !== -1) {
        state.user[index] = action.payload;
      }
    });
  }
});

export default adminUserSlice.reducer;