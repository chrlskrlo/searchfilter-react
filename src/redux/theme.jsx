import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = '';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: { value: initialStateValue },
    reducers: {
        ChangeColor: (state, action) => {
            state.value = action.payload
        }
    },

})

export const { ChangeColor } = themeSlice.actions
export default themeSlice.reducer