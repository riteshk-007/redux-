const { createSlice, nanoid, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  users: [],
  isloading: true,
  fetchData: [],
};

export const fetchDataFromAPI = createAsyncThunk("userAPI", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
});
const Slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);
    },
    removeUser: (state, action) => {
      const data = state.users.filter((item) => item.id !== action.payload);
      state.users = data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataFromAPI.fulfilled, (state, action) => {
      state.isloading = false;
      state.fetchData = action.payload;
    });
  },
});
export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
