import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

function TasksList() {
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const clickDelete = (id) => {
    console.log(id);
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <h1>Tasks {tasks.length}</h1>
      <Link to="/add">Create new Task</Link>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => clickDelete(task.id)}>Delete</button>
            <Link to={`/edit/${task.id}`}>
              Edit
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default TasksList;
