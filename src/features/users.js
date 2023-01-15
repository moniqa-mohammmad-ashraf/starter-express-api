import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const getUserExercise = createAsyncThunk('user/getuserexercise', async (data, thunkApi) => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    const response = await fetch('http://localhost:3001/getuserexercise', requestOptions);
    return response.json();
});
export const addUserExercise = createAsyncThunk('user/addUserExercise', async (data, thunkApi) => {
console.log(data)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    const response = await fetch('http://localhost:3001/addUserExercise', requestOptions);
    return response.json();
});

export const deleuserExercise = createAsyncThunk('user/delUserExercise', async (data, thunkApi)=>{
    console.log(data)
    const requestOptions = {
        method: 'Delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    const response = await fetch('http://localhost:3001/delUserExercise', requestOptions);
    return response.json();
});

export const updateUserExercise = createAsyncThunk("exercise/updateUserExercise",async (data, thunkApi) => {
  
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const res = await fetch(`http://localhost:3001/updateUserExercise`, requestOptions)
        return res.json();

    });
export const userExerciseSlice=createSlice({
    name:"user",
    initialState:{
        exerciseLog:[{
            Name:"",
            Desc:"",
            ActTyp:"",
            Duration:"",
            Date:""
        }],
        isLogged:false
        
    },
    reducers:{},
    extraReducers: {
        [addUserExercise.pending]: (state, action) => {
            console.log('pending');
        },
        [addUserExercise.fulfilled]: (state, action) => {
            state.response = action.payload.message
            alert(state.response)
        },
        [addUserExercise.rejected]: () => {
            console.log('request rejected');
        },
        [getUserExercise.pending]: (state, action) => {
            console.log("hello pending")
        },
        [getUserExercise.fulfilled]: (state, action) => {
            state.response = action.payload.message;
            state.exerciseLog=action.payload;
            console.log(state.exerciseLog)
            
        },
        [getUserExercise.rejected]: () => {
            console.log('fetch user rejected');
        },
        [deleuserExercise.pending]:()=>{
            console.log('pending');
        },
        [deleuserExercise.fulfilled]: (state, action) => {
            state.response = action.payload.message;
            console.log(state.response )
        },
        [deleuserExercise.rejected]: ()=>{
            console.log('request rejected');
        }
    }
})


export default userExerciseSlice.reducer;
