import { createSlice } from "@reduxjs/toolkit";

const viewSlice = createSlice({
    name:"mainview",
    initialState: {
      view: "recipe",
    },
    reducers:{
      setView: (state , action) => {
        state.view = action.payload
      }
    }
  })
  
  
  
  export const { setView  } = viewSlice.actions ;
  export default viewSlice.reducer ;