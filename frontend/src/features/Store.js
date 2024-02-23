import { configureStore } from "@reduxjs/toolkit";
import ThemeSlicereducer from "./ThemeSlice";

export const store = configureStore({
 reducer:{
     themekey: ThemeSlicereducer
 }
});