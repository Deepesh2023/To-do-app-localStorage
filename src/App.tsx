import { useState, useEffect } from "react";
import TaskListDisplay from "./components/TaskListDisplay.tsx";

interface Task {
  task: string;
  isDone: boolean;
}

function App() {
  const [text, setText] = useState<string>("");
  const [tasks, setTasks] = useState<object[]>([]);

  useEffect(() => {
    if (localStorage) {
      const loadedTasks = JSON.parse(localStorage.getItem("user1"));
      setTasks(loadedTasks);
    }
  }, []);

  console.log(tasks);

  const textOnChange = (event: any) => {
    setText(event.target.value);
  };

  const addTaskButtonAction = (event: any) => {
    event.preventDefault();

    const newTask: Task = {
      task: text,
      isDone: false,
    };

    addToLocalStorage(newTask);

    setTasks(tasks.concat(newTask));
    setText("");
  };

  function addToLocalStorage(task: Task): void {
    const tasksToStore = JSON.stringify(tasks.concat(task));
    localStorage.setItem("user1", tasksToStore);
  }

  return (
    <>
      <form onSubmit={addTaskButtonAction}>
        <label>Add new task: </label>
        <input type="text" value={text} onChange={textOnChange} />
        <button type="submit">Add</button>
      </form>

      <TaskListDisplay taskList={tasks} />
    </>
  );
}

export default App;
