import { createSlice } from "@reduxjs/toolkit";


const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action){
            state.push(action.payload)
        },
        deleteProduct(state, action){
            return state.filter((item) => item.id !== action.payload);
        }
    }
})

export const {addProduct, deleteProduct} = cartSlice.actions 
export default cartSlice.reducer