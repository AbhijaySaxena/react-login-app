import { createSlice } from "@reduxjs/toolkit";

export const valFormSlice = createSlice({
    name:"valForm",

    initialState: {
        valForm:null
    },

    reducers:{
        submitForm: (state, action) => {
            state.valForm = action.payload;
        },
        removeFormData: (state) => {
            state.valForm = null;
        }
    }
})

export const {submitForm, removeFormData} = valFormSlice.actions;

export const selectValForm = (state) => state.valForm.valForm;

export default valFormSlice.reducer;