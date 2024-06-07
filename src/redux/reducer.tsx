import { createSlice } from '@reduxjs/toolkit';

const initialState: { populationData: object[] } = {
    populationData: [],
  };

export const counterSlice = createSlice({
  name: 'populationData',
  initialState,
  reducers: {
    showPopulationData:(state,action)=>{
        state.populationData=action.payload
    }
  }
});

export const {  showPopulationData} = counterSlice.actions;
export default counterSlice.reducer;