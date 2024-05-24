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
    ExpDate:"",
    FormData:[]
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
        },
        submitForm(state,action)
        {
            state.FormData.push(action.payload);
        }
    }
    })
  

export default BillingSlice.reducer;
export const {updateBillingField,clearBillingForm,submitForm}=BillingSlice.actions;