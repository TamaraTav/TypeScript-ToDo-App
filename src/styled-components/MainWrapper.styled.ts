import styled from "styled-components";

type propsTypes = {
  check: boolean;
  filter: number;
  isDark: boolean;
};

const MainWrapper = styled.div`
  width: 90%;
  max-width: 540px;
  margin-top: 48px;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;

    h1 {
      color: white;
      font-size: 40px;
      letter-spacing: 15px;
    }

    img {
      width: 30px;
      height: 30px;
      transition: 0.5s;
      cursor: pointer;
      &:hover {
        opacity: 0.6;
        transition: 0.3s;
      }
    }
  }

  .input-todo {
    margin-top: 40px;

    input {
      width: calc(100% - 52px);
      max-width: 508px;
      height: 48px;
      background-color: ${(props: propsTypes) =>
        props.isDark === true ? "#25273d" : "#FFFFFF"};
      transition: 0.5s;
      padding-left: 52px;
      color: #767992;
      border: none;
      border-radius: 5px;
      text-decoration-line: ${(props: propsTypes) =>
        props.check === false ? "none" : " line-through"};
      outline: none;
    }

    .check {
      width: 20px;
      height: 20px;
      border: ${(props: propsTypes) =>
        props.isDark === true ? "1px solid #393a4b" : "1px solid #D1D2DA"};
      transition: 0.5s;
      position: absolute;
      border-radius: 100%;
      margin-top: -35px;
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
  }

  .tasks {
    background-color: ${(props: propsTypes) =>
      props.isDark === true ? "#25273d" : "#FFFFFF"};
    transition: 0.5s;
    margin-top: 16px;
    border-radius: 5px;

    max-height: 330px;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: ${(props: propsTypes) =>
        props.isDark === true ? "#393a4b" : "#E3E4F1"};
      border-radius: 5px;
      transition: 0.5s;
    }

    ::-webkit-scrollbar-thumb {
      background: ${(props: propsTypes) =>
        props.isDark === true ? "#5b5e7e" : "#E2DEDE"};
      border-radius: 5px;
      transition: 0.5s;
    }
  }

  .result {
    height: 50px;
    width: 100%;
    background-color: ${(props: propsTypes) =>
      props.isDark === true ? "#25273d" : "#FFFFFF"};
    transition: 0.5s;
    justify-content: space-around;
    align-items: center;
    color: #5b5e7e;
    font-size: 13px;
    border-top: ${(props: propsTypes) =>
      props.isDark === true ? "1px solid #393A4B" : "1px solid #E3E4F1"};
    .clear {
      cursor: pointer;
      &:hover {
        transition: 0.2s;
        opacity: 0.5;
      }
    }
  }

  .filter {
    height: 50px;
    width: 100%;
    background-color: ${(props: propsTypes) =>
      props.isDark === true ? "#25273d" : "#FFFFFF"};
    transition: 0.5s;
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    color: #5b5e7e;
    font-size: 14px;
    margin-top: 16px;

    p {
      cursor: pointer;
      &:hover {
        transition: 0.2s;
        opacity: 0.5;
      }
    }
    .all {
      color: ${(props: propsTypes) => (props.filter === 1 ? "#3A7CFD" : "")};
    }

    .active {
      color: ${(props: propsTypes) => (props.filter === 2 ? "#3A7CFD" : "")};
    }

    .completed {
      color: ${(props: propsTypes) => (props.filter === 3 ? "#3A7CFD" : "")};
    }
  }
`;
export default MainWrapper;
