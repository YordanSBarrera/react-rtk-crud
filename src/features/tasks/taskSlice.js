//import { createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
//import { v4 as idUuid } from "uuid";
const initialState = [
  {
    id: "1",
    title: "tarea 1",
    description: "tarea 1 Descripcion",
    completed: false,
  },
  {
    id: "2",
    title: "tarea 2",
    description: "tarea 2 Descripcion",
    completed: false,
  },
];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      // [...state, action.payload];
    },
    deleteTask: (state, action) => {
      console.log(action.payload);
      const findTask = state.find((task) => task.id === action.payload);
      console.log(findTask);
      if (findTask) {
        state.splice(state.indexOf(findTask), 1);
      }
    },
    updateTask: (state, action) => {
      console.log(action.payload);
      const { id, description, title } = action.payload;
      const foundTask = state.find((task) => task.id === id);
      if (foundTask) {
        foundTask.title = title;
        foundTask.description = description;
      }
    },
  },
});
export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
