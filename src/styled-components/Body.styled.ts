import styled from "styled-components";
import { bgDesktopDark, bgDesktopLight, bgMobileDark, bgMobileLight} from "../assets";

type propsTypes ={
  isDark: boolean
}
const Body = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${(props: propsTypes) => props.isDark === true ? bgMobileDark : bgMobileLight}); 
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: ${(props: propsTypes) =>
      props.isDark === true ? "#171823" : "#F2F2F2;"};
      transition: 0.5s;

      @media(min-width: 1000px) {
        background-image: url(${(props: propsTypes) => props.isDark === true ? bgDesktopDark : bgDesktopLight}); 
      }
`;
export default Body;
