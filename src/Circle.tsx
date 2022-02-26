import { useState } from "react";
import styled from "styled-components";

interface ContainerProps{
    bgColor:string;
    borderColor:string;
}



const Container = styled.div<ContainerProps>`
    background-color: ${(props) => props.bgColor};
    width: 300px;
    height: 300px;
    border-radius: 150px;
    border: 10px solid;
    border-color: ${(props) => props.borderColor};
`

interface CircleProps {
    bgColor:string;
    borderColor?:string;
    text?:string;
}



function Circle({ bgColor,borderColor,text="default Text" }: CircleProps) {
    const [counter,setCounter] = useState<number|string>(1);
    setCounter(2);
    setCounter("joy");
    //setCounter(true) 
    return <Container bgColor={bgColor}  borderColor={borderColor ?? bgColor}>
        {text}
        </Container>
        ;
  }


export default Circle;