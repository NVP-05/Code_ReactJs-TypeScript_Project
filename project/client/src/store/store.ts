import { configureStore } from "@reduxjs/toolkit";
import { registerReducer } from "./reducers/registerReducer";
import loginReducer from "./reducers/loginReducer";
import adminUserReducer from "./reducers/adminUserReducer";

const store: any = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    adminUser: adminUserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;