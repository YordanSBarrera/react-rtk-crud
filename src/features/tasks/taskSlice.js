//import { createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState=[
  {
    id:"1",
    title:"tarea 1",
    description:"tarea 1 Descripcion",
    completed:false
  },
  {
    id:"2",
    title:"tarea 2",
    description:"tarea 2 Descripcion",
    completed:false
  },
]

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
