import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

function TasksList() {
  const tasks = useSelector((state) => state.tasks);
  
  const dispatch = useDispatch();

  const clickDelete = (id) => {
    console.log(id);
    dispatch(deleteTask(id));
  };

  return (
    <div>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => clickDelete(task.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default TasksList;
