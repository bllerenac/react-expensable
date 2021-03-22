import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "../features/session/sessionSlice"
import usersReducer from "../features/users/usersSlice"
import productsReducer from "../features/products/productsSlice"

export default configureStore({
  reducer: {
    products: productsReducer,
    session: sessionReducer,
    users: usersReducer,
  },
});