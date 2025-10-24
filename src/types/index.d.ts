declare module "*.jpg";
declare module "*.png";
declare module "*.svg";

type tasksTypes = {
  id: number;
  text: string;
  checked: boolean;
};

type arrType = {
  tasks: tasksTypes[];
};

type taskProps = {
  id: number;
  text: string;
  checked: boolean;
  setCheck: (check: boolean) => void;
  isDark: boolean;
  setTasks: (tasks: arrType) => void;
  check: boolean;
  tasks: tasksTypes[];
};
