import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../axios.js";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const {data} = await axios.get('/posts/')
    return data
})

const initialState = {
    posts: {
        items: [],
        isLoading: true,
        error: null
    },
    tags: {
        items: [],
        isLoading: true,
        error: null
    },
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers:{
        [fetchPosts.pending]: (state) => {
            state.posts.items = []
            state.posts.isLoading = true
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.posts.items = action.payload
            state.posts.isLoading = false
        },
        [fetchPosts.rejected]: (state) => {
            state.posts.items = []
            state.posts.isLoading = false
            state.posts.error = 'Ошибка при загрузке постов'
        },

    }
})

export const postsReducer = postsSlice.reducer

