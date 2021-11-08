import React,{useRef} from 'react'
import {Colordiv} from './onediv'
import styled from 'styled-components'
import useClipboard from './copyclipboard'

function Palleteone({entry}) {

  const [target,copytext,Custom] = useClipboard()

    return (
        <Container>
            <Colordiv2 style={{backgroundColor:entry}}>
              <h1 ref={target} onClick={copytext}>{entry}</h1>
              <Custom />
            </Colordiv2>
        </Container>
    )
}

const Container = styled.div`
width: 20%;
min-height: 90vh;

@media (max-width:768px){
    width:100%;
}

`
const Colordiv2 = styled(Colordiv)`
min-height: 90vh;
border-radius: 0rem;

h1{
    cursor: pointer;
}
`
export default Palleteone
