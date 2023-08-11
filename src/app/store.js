import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice"
import valFormReducer from "../features/valFormSlice"


export default configureStore({
    reducer: {
        user: userReducer,
        valForm: valFormReducer
    }
})