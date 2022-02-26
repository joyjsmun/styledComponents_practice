import styled from "styled-components";

interface ContainerProps{
    bgColor:string;
}



const Container = styled.div<ContainerProps>`
    background-color: ${(props) => props.bgColor};
    width: 300px;
    height: 300px;
    border-radius: 150px;
`

interface CircleProps {
    bgColor:string;

}



function Circle({ bgColor }: CircleProps) {
    return <Container bgColor={bgColor} />;
  }


export default Circle;