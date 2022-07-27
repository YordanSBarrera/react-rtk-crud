import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../features/tasks/taskSlice";
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
    if (params.id) {
      dispatch(updateTask(task))
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }
    navegate("/");
  };

  useEffect(() => {
    console.log(params, allTasks);
    if (params.id) {
      setTask(allTasks.find((task) => task.id === params.id));
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChange}
        value={task.title}
      />
      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={task.description}
      ></textarea>
      <button>Save</button>
    </form>
  );
}

export default TaskForm;
