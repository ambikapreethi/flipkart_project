import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
name:"cart",
initialState:{
    items:[],
    totalPrice:0,
    isPopupOpen: false
    },
    reducers:
    {
        addToCart(state,action)
        {
             
             state.items.push(action.payload);
             state.totalPrice += action.payload.price;
             state.isPopupOpen = true; 
         },
        closePopup: (state) => {
            state.isPopupOpen = false; 
        },
        
        updateTotalPrice: (state) => {
            state.totalPrice = state.items.reduce((total, item) => total + item.price, 0);
        },
        removeFromCart(state,action)
        {
            state.items=state.items.filter((item)=>item.id !==action.payload)
        }
    }

})

export default cartSlice.reducer;
export const {addToCart,removeFromCart,updateTotalPrice,closePopup }=cartSlice.actions;