import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../interface/product";
import { AppConfig } from "../../config/app.config";
import { useAuth } from "../../hooks/use-auth";
import axios from "axios";
import { IOrder } from "../../interface/order";

interface IInitialState {
    orderProducts: IOrder[]
}

const initialState: IInitialState = {
    orderProducts: []
}

export const getOrderProducts = createAsyncThunk(
    'product-orders',
    async () => {
        const { userId } = useAuth()
        try {
            const { data } = await axios.get(`${AppConfig.API_URL}/get-order/${userId}`)

            return {
                success: true,
                message: "Successful",
                data
            }
        } catch (error) {
            return {
                success: false,
                message: "Failed to get orders"
            }
        }
    }
)

export const addProductToCart = createAsyncThunk(
    'add-product',
    async ({ productId, totalOrder }: { productId: string, totalOrder: number }) => {
        const { userId } = useAuth()
        try {
            const { data } = await axios.post(`${AppConfig.API_URL}/create-order/`, {
                userId: userId,     
                productId,
                totalOrder: totalOrder
            })

            return {
                success: true,
                message: "Added to cart",
                data
            }
        } catch (error) {
            return {
                success: false,
                message: "Failed to get orders"
            }
        }
    }
)

export const updateProductToCart = createAsyncThunk(
    'update-product',
    async ({ orderId, totalOrder }: { orderId: string, totalOrder: number }) => {
        const { userId } = useAuth()
        try {
            const { data } = await axios.put(`${AppConfig.API_URL}/update-order/${orderId}`, {
                totalOrder: totalOrder
            })

            return {
                success: true,
                message: "Updated to cart",
                data
            }
        } catch (error) {
            return {
                success: false,
                message: "Failed to update order"
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
            state.orderProducts = action.payload.data
        })
        builder.addCase(addProductToCart.fulfilled, (state, action) => {
            const product = action.payload.data;
            state.orderProducts.push(product)
        })
        builder.addCase(updateProductToCart.fulfilled, (state, action) => {
            const product = action.payload.data;
            state.orderProducts.push(product)
        })
    },
})


export default OrderSlice.reducer;