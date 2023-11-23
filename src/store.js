import { configureStore } from "@reduxjs/toolkit";
import reducer from "./rootReducer";
import thunk from "redux-thunk";
const middleware = [thunk];

export default configureStore({
  reducer,
  middleware,
});
