import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    inc: (state) => {
      state.value += 1;
    },
    dec: (state) => {
      state.value += 1;
    },
  },
});

//declare the object
//reducers --->store hote hai
//action

export const { inc, dec } = counter.actions; //destruture
export default counter.reducer; //default ke name chnage kar sakte
