import { useState } from "react";
import { FC } from "react";

interface TaskListDisplayProps {
  taskList: null | string[];
}

function App() {
  const [text, setText] = useState<string>("");
  const [tasks, setTasks] = useState<null | string[]>(null);

  console.log(localStorage);

  const textOnChange = (event: any) => {
    setText(event.target.value);
  };

  const addTaskButtonAction = (event: any) => {
    event.preventDefault();

    if (tasks === null) {
      setTasks([text]);
      const tasksToStore = JSON.stringify(tasks);
      localStorage.setItem("user1", tasksToStore);
      setText("");
      return;
    }

    setTasks(tasks?.concat(text));
    const tasksToStore = JSON.stringify(tasks);
    localStorage.setItem("user1", tasksToStore);
    setText("");
  };

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

const TaskListDisplay: FC<TaskListDisplayProps> = ({ taskList }) => {
  if (taskList) {
    return (
      <>
        <ul>
          {taskList.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </>
    );
  }
  return null;
};

export default App;
