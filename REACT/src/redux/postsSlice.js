import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    posts : [],
    loading : false,
    error : null
}

const postsSlice = createSlice({
    name : 'posts',
    initialState,
    reducers: {
        fetchPostsStart(state){
            state.loading = true
        },
        fetchPostsSuccess(state,action){
            state.loading = false
            state.posts = action.payload
        },
        fetchPostsFailure(state,action){
            state.loading = false
            state.error = action.payload
        }
    }
})


export const {fetchPostsStart,fetchPostsSuccess,fetchPostsFailure} = postsSlice.actions

export const  fetchPosts = ()=>async(dispatch)=>{
    dispatch(fetchPostsStart())
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch(fetchPostsSuccess(response.data))
    }catch(error){
        dispatch(fetchPostsFailure(error.message))
    }
}

export default postsSlice.reducer