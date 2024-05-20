import { createSlice } from "@reduxjs/toolkit";

const initialState={
    firstName:"",
    lastName:"",
    Email:"",
    Address:"",
    City:"",
    State:"",
    Zip:"",
    Payment:"",
    CardNo:"",
    SecCode:"",
    ExpDate:""
}



const BillingSlice=createSlice({
    name:"billing",
    initialState,
    reducers:{
        updateBillingField(state,action){
            const {name,value}=action.payload;
            state[name]=value;
        },
        clearBillingForm(){
            return initialState;
        }}})
  

export default BillingSlice.reducer;
export const {updateBillingField,clearBillingForm}=BillingSlice.actions;