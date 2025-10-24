import { TaskWrapper } from "../styled-components";
import { iconCheck, iconCross } from "../assets";
import { useState, useEffect } from "react";
import { taskProps, tasksTypes } from "../types/index";

const Task = (props: taskProps) => {
  const [ifchecked, setIfChecked] = useState<boolean>(props.check);

  useEffect(() => {
    setIfChecked(props.check);
  }, [props.check]);

  const handleToggle = () => {
    const newChecked = !ifchecked;
    setIfChecked(newChecked);
    props.setCheck(newChecked);
  };

  const handleDelete = () => {
    const tasksCopied: tasksTypes[] = [...props.tasks];
    const index = tasksCopied.findIndex(
      (element: tasksTypes) => element.id === props.id
    );
    if (index !== -1) {
      tasksCopied.splice(index, 1);
      props.setTasks(tasksCopied);
    }
  };

  return (
    <TaskWrapper check={ifchecked} isDark={props.isDark}>
      <div className="check" onClick={handleToggle}>
        <img src={iconCheck} alt="Check task" />
      </div>
      <p>{props.text}</p>
      <img
        className="cross"
        src={iconCross}
        alt="Delete task"
        onClick={handleDelete}
      />
    </TaskWrapper>
  );
};

export default Task;
