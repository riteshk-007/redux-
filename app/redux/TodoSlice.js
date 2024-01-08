const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  todos: [],
};

const Slice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.todos.push(data);
    },
    removeTodo: (state, action) => {
      const data = state.todos.filter((item) => item.id !== action.payload);
      state.todos = data;
    },
  },
});
export const { addTodos, removeTodo } = Slice.actions;
export default Slice.reducer;
