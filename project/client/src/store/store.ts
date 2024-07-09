import { configureStore } from "@reduxjs/toolkit";
import { registerReducer } from "./reducers/registerReducer";
import loginReducer from "./reducers/loginReducer";

const store: any = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
