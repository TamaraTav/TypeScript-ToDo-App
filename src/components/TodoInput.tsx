import { iconCheck } from "../assets";

type TodoInputProps = {
  onAddTask: (text: string, checked: boolean) => void;
  checkAll: boolean;
  onToggleCheckAll: () => void;
};

const TodoInput = ({
  onAddTask,
  checkAll,
  onToggleCheckAll,
}: TodoInputProps) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const target = e.target as HTMLInputElement;
      const text = target.value.trim();

      if (text) {
        onAddTask(text, checkAll);
        target.value = "";
      }
    }
  };

  return (
    <div className="input-todo">
      <input placeholder="Create a new todo…" onKeyPress={handleKeyPress} />
      <div className="check" onClick={onToggleCheckAll}>
        <img src={iconCheck} alt="Check all" />
      </div>
    </div>
  );
};

export default TodoInput;
