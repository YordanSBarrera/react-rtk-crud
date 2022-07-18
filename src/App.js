import "./App.css";
import { useSelector } from "react-redux/es/exports";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
const App = () => {
 const tasksState=useSelector(state=>state.tasks);
 console.log(tasksState)
  return (
    <div className="App">
    <h1>Hola Mundo</h1>
    <TaskForm/>
    <TasksList/>
    </div>
  );
};

export default App;
