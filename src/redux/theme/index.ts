import { createSlice } from '@reduxjs/toolkit';
import { ThemeStore } from 'models/store/theme';

const initialState: ThemeStore = {
  theme: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const theme = state.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', theme);
      state.theme = theme;
    },
    getInitialTheme: (state) => {
      localStorage.getItem('theme') === 'dark'
        ? (state.theme = 'dark')
        : (state.theme = 'light');
    },
  },
});

export const { toggleTheme, getInitialTheme } = themeSlice.actions;
export default themeSlice.reducer;
