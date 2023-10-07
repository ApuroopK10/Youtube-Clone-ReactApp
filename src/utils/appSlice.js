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
  },
});

export const { toggleMenuIcon } = appSlice.actions;
export default appSlice.reducer;
