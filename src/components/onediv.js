import React from "react";
import styled from "styled-components";
import {useDispatch,useSelector} from 'react-redux'


function Onediv({colorvalue,colorchange}) {
    const dispatch = useDispatch()

    const randomcolor = () => {
      return `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`
    }

    return (
        <Container>
        <Colordiv style={{backgroundColor:colorvalue}} >
             <h1>{colorvalue}</h1>
        </Colordiv>
        <Colorinput>
            <input type="color" onChange={(e) => dispatch(colorchange(e.target.value))} defaultValue={randomcolor()}/>
        </Colorinput>
        </Container>
    )
}

export const Colordiv = styled.div`
min-height: 60vh;
display: flex;
align-items: center;
justify-content: center;
border-radius: .3rem;


`

export const Container = styled.div`
width: 20rem;
height: 70vh;
@media (max-width:768px){
    width: 90%;

}

`

const Colorinput = styled.div`
min-height: 10vh;
display: flex;
align-items: center;
justify-content: center;
`

export default Onediv
