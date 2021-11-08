import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    colorarray:localStorage.getItem('color') ? JSON.parse(localStorage.getItem('color')) : []
}

const Colorarrayslice = createSlice({
    name:'colorarray',
    initialState,
    reducers:{
        submitbutton: (state,{payload}) => {
          state.colorarray.push(payload)
          localStorage.setItem('color',JSON.stringify(state.colorarray))
        },
        removeitem: (state,{payload}) => {
            state.colorarray = payload
        }
    }
})

export const {submitbutton,removeitem} = Colorarrayslice.actions
export default Colorarrayslice.reducer

