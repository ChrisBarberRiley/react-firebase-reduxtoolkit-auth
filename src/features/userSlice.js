import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  email: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      console.log(action);
      state.name = action.payload.name;
      state.email = action.payload.email;
    },

    setInactiveUser: (state, action) => {
      state.name = null;
      state.email = null;
    },
  },
});

export const { setActiveUser, setInactiveUser } = userSlice.actions;
export default userSlice.reducer;
