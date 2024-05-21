import { combineReducers } from "redux";
import apiSlice from "./apiSlice";
import cartSlice from "./cartSlice";
import BillingSlice from "./BillingSlice";

const rootReducer=combineReducers({
    products:apiSlice,
    cart:cartSlice,
    billing:BillingSlice
})

export default rootReducer;