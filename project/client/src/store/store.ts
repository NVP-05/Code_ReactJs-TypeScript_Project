import { configureStore } from "@reduxjs/toolkit";
import { registerReducer } from "./reducers/registerReducer";

const store: any = configureStore({
  reducer: {
    register: registerReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
