import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
display: flex;
background-color: ${(props) => props.theme.backgroundColor};
`

const BoxAnimation = keyframes`
0%{
transform: scale(0);
}50% {
transform: scale(2);
border-radius: 50px;
}
100%{
  transform: scale(1);
}

`

const Box = styled.div`
height: 200px;
width:200px;
background-color: tomato;

h1{
  color: ${(props) => props.theme.textColor}
}
`

function App() {
  return (
    <Wrapper>
      <Box>
        <h1>Hello</h1>
      </Box>
    </Wrapper>
  );
}

export default App;
