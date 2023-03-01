import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios.js";

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) => {
    const {data} = await axios.post('/api/token/', params)
    return data
})

export const fetchAuthVerify = createAsyncThunk('auth/fetchAuthVerify', async (params) => {
    const {data} = await axios.post('/api/token/verify/', params)
    return data
})



const initialState = {
    data: null,
    isLoading: true,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null
        }
    },
    extraReducers: {
        [fetchAuth.pending]: (state) => {
            state.data = null
            state.isLoading = true
        },
        [fetchAuth.fulfilled]: (state, action) => {
            state.data = action.payload
            state.isLoading = false
        },
        [fetchAuth.rejected]: (state) => {
            state.data = null
            state.isLoading = false
            state.error = 'Ошибка при выполнении авторизации'
        },
        [fetchAuthVerify.fulfilled]: (state) => {
            state.data = '1'
        },
    }
})

export const selectIsAuth = (state) => Boolean(state.auth.data)
export const authReducer = authSlice.reducer
export const {logout} = authSlice.actions