import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const allTasks = useSelector((state) => state.tasks);
  const navegate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  // console.log(tasks);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        ...task,
        id: uuid(),
      })
    );
    navegate("/");
  };

  useEffect(() => {
    console.log(params, allTasks);
    if (params.id) {
      setTask(
        allTasks.map((tarea) => {
          if (params.id === tarea.id) return tarea;
        })
      );
    }
    // console.log(task);
  }, [params, allTasks]);
  useEffect(() => {
    console.log(task);
  }, [task]);
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChange}
        value={task ? task.title : ""}
      />
      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={task ? task.description : ""}
      ></textarea>
      <button>Save</button>
    </form>
  );
}

export default TaskForm;
