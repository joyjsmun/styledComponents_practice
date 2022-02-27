import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
background-color: ${(props) => props.theme.bgColor};
  
`

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`

function App() {
  return <Container>
    <H1>Hello Theme!!!</H1>
  </Container>
}

export default App;
