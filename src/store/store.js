import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    // post slice todo
  },
});

export default store;
