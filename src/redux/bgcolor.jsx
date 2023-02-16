import { createSlice } from "@reduxjs/toolkit";

const bgcolor = '';

export const bgcolorSlice = createSlice({

    name: 'bgcolor',
    initialState: { value: bgcolor },
    reducers: {
        BackgroundColor: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { BackgroundColor } = bgcolorSlice.actions
export default bgcolorSlice.reducer