import { createSlice, createAsyncThunk,current, createSerializableStateInvariantMiddleware } from "@reduxjs/toolkit";
// import axios from "axios";
const initialState={
products: [],
filteredProducts: [],
rating:0,
status: "idle",
error: null
}
 export const fetchItems = createAsyncThunk('api/ItemsApi',
    async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
           return response.json();
        } catch (error) {
            throw error;        }

    }
)

const apiSlice = createSlice({
    name: "products",
   initialState,
   reducers: {

    filterProductsByPrice: (state, action) => {
        const { minPrice, maxPrice } = action.payload;
        state.filteredProducts = state.products.filter(product => (
            product.price >= minPrice && product.price <= maxPrice
          ));
       
    } },
   extraReducers: (builder) => {
        builder
            .addCase(fetchItems.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.products = action.payload;
            
            })

            .addCase(fetchItems.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
    } )       
    }
})
    

export default apiSlice.reducer;
export const { filterProductsByPrice }=apiSlice.actions;
