import styled, { keyframes } from "styled-components";

const Wrapped = styled.div`
display: flex;
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
animation: ${BoxAnimation} 1s linear infinite;
`

function App() {
  return (
    <Wrapped>
      <Box/>
    </Wrapped>
  );
}

export default App;
