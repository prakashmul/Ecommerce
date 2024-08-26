import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../interface/product";
import { AppConfig } from "../../config/app.config";
import { useAuth } from "../../hooks/use-auth";
import axios from "axios";

interface IInitialState {
    products: IProduct[]
}

const initialState: IInitialState = {
    products: []
}

export const getOrderProducts = createAsyncThunk(
    'product-orders',
    async () => {
        const {userId} = useAuth()
        try {
            const {data} = await axios.get(`${AppConfig.API_URL}/get-order/${userId}`)

            return{
                success: true,
                message: "Successful",
                data
            }
        } catch (error) {
            return{
                success: false,
                message: "Failed to get orders"
            }
        }
    }
)

export const addProductToCart = createAsyncThunk(
    'add-product',
    async ({productId, totalOrder}: {productId: string, totalOrder: number}) => {
        const {userId} = useAuth()
        try {
            const {data} = await axios.post(`${AppConfig.API_URL}/create-order/`, {
                userId: userId,
                productId,
                totalOrder: totalOrder
            })

            return{
                success: true,
                message: "Added to cart",
                data
            }
        } catch (error) {
            return{
                success: false,
                message: "Failed to get orders"
            }
        }
    }
)

export const OrderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(getOrderProducts.fulfilled, (state, action) => {
            state.products = action.payload.data
        })
        builder.addCase(addProductToCart.fulfilled, (state, action) => {
            const product = action.payload.data;
            state.products.push(product)
        })
    },
})


export default OrderSlice.reducer;