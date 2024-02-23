import { DeveloperBoardOffSharp } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

export const ThemeSlice = createSlice({
    name: "ThemeSlice",
    initialState: true,
    reducers: {
        toggleTheme : (state)=>{
            state= !state;
            return state;
        }
    }
})

export const {toggleTheme}= ThemeSlice.actions;
export default ThemeSlice.reducer;