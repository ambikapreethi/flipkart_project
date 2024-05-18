import { combineReducers } from "redux";
import apiSlice from "./apiSlice";
import cartSlice from "./cartSlice";

const rootReducer=combineReducers({
    api:apiSlice,
    cart:cartSlice
})

export default rootReducer;