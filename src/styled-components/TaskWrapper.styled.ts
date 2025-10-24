import styled from "styled-components";

type propsTypes = {
  check: boolean;
  isDark: boolean;
};

const TaskWrapper = styled.div`
  height: 50px;
  border-bottom: ${(props: propsTypes) =>
    props.isDark === true ? "1px solid #393A4B" : "1px solid #E3E4F1"};
  transition: 0.5s;
  display: flex;
  align-items: center;
  position: relative;
  .check {
    width: 20px;
    height: 20px;
    border: ${(props: propsTypes) =>
      props.isDark === true ? "1px solid #393a4b" : "1px solid #D1D2DA"};
    transition: 0.5s;
    border-radius: 100%;
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props: propsTypes) =>
      props.check === false
        ? "none"
        : "linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)"};

    img {
      width: 12px;
      height: 12px;

      display: ${(props: propsTypes) =>
        props.check === false ? "none" : "initial"};
    }
  }

  p {
    color: ${(props: propsTypes) =>
      props.isDark === true ? "#C8CBE7" : "#494C6B"};
    opacity: ${(props: propsTypes) => (props.check === false ? "1" : "0.5")};
    transition: 0.5s;
    margin-left: 12px;
    text-decoration-line: ${(props: propsTypes) =>
      props.check === false ? "none" : " line-through"};
  }

  .cross {
    position: absolute;
    right: 15px;
    width: 13px;
  }
`;

export default TaskWrapper;
