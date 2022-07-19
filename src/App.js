import "./App.css";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";

const App = () => {
  return (
    <div className="App">
      <h1>Hola Mundo</h1>
      <TaskForm />
      <TasksList />
    </div>
  );
};

export default App;
