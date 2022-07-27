import "./App.css";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/add" element={<TaskForm />} />
        <Route path="/" element={<TasksList />} />
        <Route path="/edit/:id" element={<TaskForm/>}/>
      </Routes>
    </div>
  );
};

export default App;
