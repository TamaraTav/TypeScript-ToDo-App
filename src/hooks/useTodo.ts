import { useState, useMemo } from "react";
import { tasksTypes } from "../types/index";

export const useTodo = () => {
  const [tasks, setTasks] = useState<tasksTypes[]>([]);
  const [filter, setFilter] = useState<number>(1); // 1: All, 2: Active, 3: Completed
  const [checkAll, setCheckAll] = useState<boolean>(false);

  // Add new task
  const addTask = (text: string, checked: boolean = false) => {
    const newTask: tasksTypes = {
      id: Math.random() * Math.random(),
      text: text,
      checked: checked,
    };
    setTasks([...tasks, newTask]);
  };

  // Update task
  const updateTask = (id: number, updates: Partial<tasksTypes>) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updates } : task))
    );
  };

  // Delete task
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Clear completed tasks
  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.checked));
  };

  // Toggle check all
  const toggleCheckAll = () => {
    setCheckAll(!checkAll);
    setTasks(tasks.map((task) => ({ ...task, checked: !checkAll })));
  };

  // Get filtered tasks
  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 2: // Active
        return tasks.filter((task) => !task.checked);
      case 3: // Completed
        return tasks.filter((task) => task.checked);
      default: // All
        return tasks;
    }
  }, [tasks, filter]);

  // Get tasks count
  const tasksCount = filteredTasks.length;
  const activeTasksCount = tasks.filter((task) => !task.checked).length;

  return {
    tasks,
    filteredTasks,
    filter,
    checkAll,
    tasksCount,
    activeTasksCount,
    addTask,
    updateTask,
    deleteTask,
    clearCompleted,
    toggleCheckAll,
    setFilter,
  };
};
