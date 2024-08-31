import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    currentUser:null,
    loading:false,
    error:null
}
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart:(state)=>{
            state.loading=true
        },
        signInSuccess:(state,action)=>{
            state.currentUser=action.payload,
            state.loading = false,
            state.error = null
        },
        signInFailure:(state,action)=>{
            state.loading = false,
            state.error = action.payload
        },
        updateUserStart:(state)=>{
            state.loading = true
        },
        updateUserSuccess :(state,action)=>{
            state.loading = false
            state.error = null
            state.currentUser = action.payload
        },
        updateUserFailure :(state,action)=>{
            state.loading = false
            state.error = action.payload
        },
        deleteUserStart:(state)=>{
            state.loading = true
        },
        deleteUserSuccess :(state)=>{
            state.loading = false
            state.error = null
            state.currentUser = null
        },
        deleteUserFailure :(state,action)=>{
            state.loading = false
            state.error = action.payload
        },
        signout: (state)=>{
            state.loading = false;
            state.error = false;
            state.currentUser= null;
        }
        
    },

})
export const {signInStart,signInSuccess,signInFailure,updateUserStart,updateUserSuccess,updateUserFailure,deleteUserStart,deleteUserFailure,deleteUserSuccess,signout} = userSlice.actions;
export default userSlice.reducer;