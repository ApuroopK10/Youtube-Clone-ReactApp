const { createSlice } = require("@reduxjs/toolkit");

const appSlice = createSlice({
  name: "app",
  initialState: {
    toggleMenu: true,
  },
  reducers: {
    toggleMenuIcon: (state) => {
      state.toggleMenu = !state.toggleMenu;
    },
    toggleMenuManually: (state, action) => {
      state.toggleMenu = action.payload;
    },
  },
});

export const { toggleMenuIcon, toggleMenuManually } = appSlice.actions;
export default appSlice.reducer;
