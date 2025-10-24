export type tasksTypes = {
  id: number;
  text: string;
  checked: boolean;
};

export type arrType = {
  tasks: tasksTypes[];
};

export type taskProps = {
  id: number;
  text: string;
  checked: boolean;
  setCheck: (check: boolean) => void;
  isDark: boolean;
  setTasks: (tasks: tasksTypes[]) => void;
  check: boolean;
  tasks: tasksTypes[];
};
