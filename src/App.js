import styled from "styled-components";

const Wrapped = styled.div`
display: flex;
`

const Input = styled.input.attrs({required:true})`
background-color: tomato;
color:white;
border-radius: 50px;
border: 0;
`

function App() {
  return (
    <Wrapped>
     <Input />
     <Input />
     <Input />
    </Wrapped>
  );
}

export default App;
