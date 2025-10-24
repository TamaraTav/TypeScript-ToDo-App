import { TaskWrapper } from "../styled-components";
import { iconCheck, iconCross } from "../assets";
import { useRef, useState } from "react";
const Task = (props: taskProps) => {
  const [ifchecked, setIfChecked] = useState<boolean>(props.check);

  const tasksCopied: any = [...props.tasks];
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
        <img src={iconCheck} />
      </div>
      <p>{props.text}</p>
      <img
        className="cross"
        src={iconCross}
        onClick={() => {
          tasksCopied?.splice(index, 1);
          props.setTasks(tasksCopied);
        }}
      />
    </TaskWrapper>
  );
};

export default Task;
