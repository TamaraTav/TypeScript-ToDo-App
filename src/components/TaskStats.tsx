type TaskStatsProps = {
  tasksCount: number;
  onClearCompleted: () => void;
};

const TaskStats = ({ tasksCount, onClearCompleted }: TaskStatsProps) => {
  if (tasksCount === 0) {
    return null;
  }

  return (
    <div className="result" style={{ display: "flex" }}>
      <p>{tasksCount} items left</p>
      <p className="clear" onClick={onClearCompleted}>
        Clear Completed
      </p>
    </div>
  );
};

export default TaskStats;
