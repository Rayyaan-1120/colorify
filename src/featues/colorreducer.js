import {createSlice} from '@reduxjs/toolkit'

const initialState = {
   value:{
    color1:"",
    color2:"",
    color3:"",
    color4:"",
    color5:"",
    id:""
   }
   
}

const ColorSlice = createSlice({
    name:"color",
    initialState,
    reducers:{
        colorchange1: (state,{payload}) => {
            state.value.color1 = payload
        },
        colorchange2: (state,{payload}) => {
            state.value.color2 = payload
        },
        colorchange3: (state,{payload}) => {
            state.value.color3 = payload
        },
        colorchange4: (state,{payload}) => {
            state.value.color4 = payload
        },
        colorchange5: (state,{payload}) => {
            state.value.color5 = payload
        },
        idchange: (state,{payload}) => {
            state.value.id = payload
        }
    }
})

export const {colorchange1,idchange,colorchange2,colorchange3,colorchange4,colorchange5} = ColorSlice.actions
export default ColorSlice.reducer