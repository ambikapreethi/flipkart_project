import { combineReducers } from "redux";
import apiSlice from "./apiSlice";
import cartSlice from "./cartSlice";
import BillingSlice from "./BillingSlice";
import paginationslice from "./paginationSlice";

const rootReducer=combineReducers({
    products:apiSlice,
    cart:cartSlice,
    billing:BillingSlice,
    pagination:paginationslice
})

export default rootReducer;