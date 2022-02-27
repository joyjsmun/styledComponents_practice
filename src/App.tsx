import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
background-color: ${(props) => props.theme.bgColor};
  
`

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`

function App() {
  const onClick = (event:React.FormEvent<HTMLButtonElement>) =>{
    console.log("clicked");
  }
 
  
  return <Container>
    <H1>Hello Theme!!!</H1>
    <form>
    <button onClick={onClick}>Click me!!</button>
    </form>
  </Container>
}

export default App;
