import React from "react";
import { Body } from "./styled-components";
import Main from "./components/Main";
import { useState } from "react";



function App() {
  const [isDark, setIsDark] = useState<boolean>(true);

  return (
    <Body isDark={isDark}>
      <Main isDark={isDark} setIsDark={setIsDark} />
    </Body>
  );
}

export default App;
