import styled from "styled-components";

const Wrapped = styled.div`
display: flex;

`

const Box = styled.div`
background-color: ${(props) => props.bgColor};
height:100px;
width: 100px;
`

const Circle = styled(Box)`
border-radius: 50px;
`

function App() {
  return (
    <Wrapped>
      <Box bgColor="red"></Box>
      <Circle bgColor="blue"></Circle>
    </Wrapped>
  );
}

export default App;
