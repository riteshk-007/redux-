const { configureStore } = require("@reduxjs/toolkit");
import UserReducer from "./slice";
import TodoReducer from "./TodoSlice";
export const store = configureStore({
  reducer: {
    users: UserReducer,
    todos: TodoReducer,
  },
});
