import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./slice"

export default configureStore({
    reducer:tableReducer
})