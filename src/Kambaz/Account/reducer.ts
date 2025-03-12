import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  _id: string;
  username: string;
  password: string;
  email: string;
}

interface AccountState {
  users: User[];
  currentUser: User | null;
}

const initialState: AccountState = {
  users: [],
  currentUser: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
  },
});

export const { setCurrentUser, addUser } = accountSlice.actions;
export default accountSlice.reducer;
