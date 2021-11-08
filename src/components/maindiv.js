import React from 'react'
import styled from 'styled-components'
import Onediv from './onediv'
import {colorchange1,colorchange2,colorchange3,colorchange4,colorchange5} from '../featues/colorreducer'
import {useSelector} from 'react-redux'
import Buttondiv from './button'


function Maindiv() {

    const color = useSelector(state => state.color.value)

    return (
        <>
        <Container>
            <Onediv colorvalue={color.color1} colorchange={colorchange1}/>
            <Onediv colorvalue={color.color2} colorchange={colorchange2}/>
            <Onediv colorvalue={color.color3} colorchange={colorchange3}/>
            <Onediv colorvalue={color.color4} colorchange={colorchange4}/>
            <Onediv colorvalue={color.color5} colorchange={colorchange5}/>

        </Container>
      <Buttondiv />
      </>
    )
}

const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
min-height: 80vh;

@media (max-width:786px){
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
}

`

export default Maindiv
