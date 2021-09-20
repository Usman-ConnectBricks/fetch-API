import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import axios from "axios";

export const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async () => {
    // const response = await axios.get(
    //   "https://jsonplaceholder.typicode.com/users"
    // );
    // return response.data
    console.log("from thunk");
  }
);

const initialState = {
  users: [],
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    UserDataGet: (state, action) => {
      const editUserId = action.payload.map((items) => {
        return { ...items, id: nanoid() };
      });
      state.users = editUserId;
    },
    removeItem: (state, action) => {
      const remove = state.users.filter((items) => {
        return items.id !== action.payload;
      });
      state.users = remove;
    },
    editUser: {},
  },
});

export const { UserDataGet, removeItem, EditState } = counterSlice.actions;

export default counterSlice.reducer;
