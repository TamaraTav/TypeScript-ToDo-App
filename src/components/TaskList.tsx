import Task from "./Task";
import { tasksTypes } from "../types/index";

type TaskListProps = {
  tasks: tasksTypes[];
  onUpdateTask: (id: number, updates: Partial<tasksTypes>) => void;
  onDeleteTask: (id: number) => void;
  isDark: boolean;
};

const TaskList = ({
  tasks,
  onUpdateTask,
  onDeleteTask,
  isDark,
}: TaskListProps) => {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          checked={task.checked}
          setCheck={() => onUpdateTask(task.id, { checked: !task.checked })}
          check={task.checked}
          setTasks={(updatedTasks) => {
            // Handle task deletion
            onDeleteTask(task.id);
          }}
          tasks={tasks}
          isDark={isDark}
        />
      ))}
    </div>
  );
};

export default TaskList;
