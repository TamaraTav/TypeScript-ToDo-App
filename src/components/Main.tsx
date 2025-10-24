import { MainWrapper } from "../styled-components";
import { useTodo } from "../hooks/useTodo";
import Header from "./Header";
import TodoInput from "./TodoInput";
import TaskList from "./TaskList";
import TaskStats from "./TaskStats";
import Filter from "./Filter";

type mainPropsTypes = {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
};

const Main = (props: mainPropsTypes) => {
  const {
    filteredTasks,
    filter,
    checkAll,
    activeTasksCount,
    addTask,
    updateTask,
    deleteTask,
    clearCompleted,
    toggleCheckAll,
    setFilter,
  } = useTodo();

  return (
    <MainWrapper check={checkAll} filter={filter} isDark={props.isDark}>
      <Header isDark={props.isDark} setIsDark={props.setIsDark} />

      <TodoInput
        onAddTask={addTask}
        checkAll={checkAll}
        onToggleCheckAll={toggleCheckAll}
      />

      <TaskList
        tasks={filteredTasks}
        onUpdateTask={updateTask}
        onDeleteTask={deleteTask}
        isDark={props.isDark}
      />

      <TaskStats
        tasksCount={activeTasksCount}
        onClearCompleted={clearCompleted}
      />

      <Filter currentFilter={filter} onFilterChange={setFilter} />
    </MainWrapper>
  );
};

export default Main;
