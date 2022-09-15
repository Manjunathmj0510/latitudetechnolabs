import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
name:'student',
initialState:{
    userData:{}
},
reducers:{
    userData:(state,action)=>{
        state.userData = action.payload
    }
}
})

export const {userData} = userSlice.actions
export default userSlice.reducer