import apiSlice from "../reducers/apiSlice";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../reducers/cartSlice";
import rootReducer from "../reducers/rootReducer";

const store=configureStore({
    reducer:rootReducer
}
)

export default store;