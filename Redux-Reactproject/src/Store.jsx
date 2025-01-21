import { configureStore } from "@reduxjs/toolkit";
import counterRd from "./Createslice"
const store = configureStore(
    {
        reducer:{
            name:counterRd
        }
    }
)

export default store;