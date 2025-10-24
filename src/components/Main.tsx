import { MainWrapper } from "../styled-components";
import { iconSun, iconCheck, iconMoon } from "../assets";
import { useState } from "react";
import Task from "./Task";

type mainPropsTypes = {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
};

const Main = (props: mainPropsTypes) => {
  const [check, setCheck] = useState<boolean>(false);
  const [tasks, setTasks] = useState<any>([]);
  const [filter, setFilter] = useState<number>(1);
  let tasksLength = 0;

  return (
    <MainWrapper check={check} filter={filter} isDark={props.isDark}>
      <header>
        <h1>TODO</h1>
        <img
          src={props.isDark == true ? iconSun : iconMoon}
          onClick={() => {
            props.setIsDark(!props.isDark);
          }}
        />
      </header>
      <div className="input-todo">
        <input
          placeholder="Create a new todo…"
          onKeyPress={(e: any) => {
            if (e.key == "Enter") {
              setTasks([
                ...tasks,
                {
                  id: Math.random() * Math.random(),
                  text: e.target.value,
                  checked: check,
                },
              ]);
              e.target.value = "";
            }
          }}
        />
        <div
          className="check"
          onClick={() => {
            setCheck(!check);
          }}
        >
          <img src={iconCheck} />
        </div>
      </div>

      <div className="tasks">
        {tasks.map((task: tasksTypes) => {
          if (filter == 1) {
            tasksLength++;
            return (
              <Task
                key={task.id}
                id={task.id}
                text={task.text}
                checked={task.checked}
                setCheck={setCheck}
                check={task.checked == true ? true : false}
                setTasks={setTasks}
                tasks={tasks}
                isDark={props.isDark}
              />
            );
          }
          if (filter == 2) {
            if (task.checked == false) {
              tasksLength++;
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  text={task.text}
                  checked={task.checked}
                  setCheck={setCheck}
                  check={false}
                  setTasks={setTasks}
                  tasks={tasks}
                  isDark={props.isDark}
                />
              );
            }
          }

          if (filter == 3) {
            if (task.checked == true) {
              tasksLength++;
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  text={task.text}
                  checked={task.checked}
                  setCheck={setCheck}
                  check={true}
                  setTasks={setTasks}
                  tasks={tasks}
                  isDark={props.isDark}
                />
              );
            }
          }
        })}
      </div>
      <div
        className="result"
        style={tasks.length == 0 ? { display: "none" } : { display: "flex" }}
      >
        <p>{tasksLength} items left</p>
        <p
          className="clear"
          onClick={() => {
            let notCompletedTasks: any = [];
            tasks.map((task: any) => {
              if (task.checked == false) {
                notCompletedTasks.push(task);
              }
            });

            setTasks(notCompletedTasks);
          }}
        >
          Clear Completed
        </p>
      </div>

      <div className="filter">
        <p
          className="all"
          onClick={() => {
            setFilter(1);
          }}
        >
          All
        </p>
        <p
          className="active"
          onClick={() => {
            setFilter(2);
          }}
        >
          Active
        </p>
        <p
          className="completed"
          onClick={() => {
            setFilter(3);
          }}
        >
          Completed
        </p>
      </div>
    </MainWrapper>
  );
};

export default Main;
