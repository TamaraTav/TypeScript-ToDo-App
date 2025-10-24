import { TaskWrapper } from "../styled-components";
import { iconCheck, iconCross } from "../assets";
import { useState } from "react";
import { taskProps, tasksTypes } from "../types/index";
const Task = (props: taskProps) => {
  const [ifchecked, setIfChecked] = useState<boolean>(props.check);

  const tasksCopied: tasksTypes[] = [...props.tasks];
  const index = tasksCopied.findIndex(
    (element: tasksTypes) => element.id === props.id
  );

  return (
    <TaskWrapper check={ifchecked} isDark={props.isDark}>
      <div
        className="check"
        onClick={() => {
          props.tasks[index].checked = !tasksCopied[index].checked;
          setIfChecked(props.tasks[index].checked);
        }}
      >
        <img src={iconCheck} alt="Check task" />
      </div>
      <p>{props.text}</p>
      <img
        className="cross"
        src={iconCross}
        alt="Delete task"
        onClick={() => {
          tasksCopied?.splice(index, 1);
          props.setTasks(tasksCopied);
        }}
      />
    </TaskWrapper>
  );
};

export default Task;
