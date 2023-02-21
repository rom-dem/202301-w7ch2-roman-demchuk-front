import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./types";

const initialState: UserState = {
  id: "",
  isLogged: false,
  token: "",
  username: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (currentUserState, action) => ({
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const userReducer = userSlice.reducer;
export const { loginUser: loginUserActionCreator } = userSlice.actions;
