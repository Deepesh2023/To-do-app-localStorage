import { FC } from "react";

interface TaskListDisplayProps {
  taskList: null | object[];
}

const TaskListDisplay: FC<TaskListDisplayProps> = ({ taskList }) => {
  if (taskList) {
    return (
      <>
        <ul>
          {taskList.map((task) => (
            <li key={task.task}>
              {task.task}
              <button>Mark done</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
  return null;
};

export default TaskListDisplay;
