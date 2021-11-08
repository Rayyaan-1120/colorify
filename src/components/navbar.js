import React,{useState} from 'react'
import styled from 'styled-components'
import {FaMoon,FaSun} from 'react-icons/fa'
import { useHistory } from 'react-router'

function Navbar() {

    const history = useHistory()



    return (
        <Navbardiv>
            <Headingbox onClick={() => {
                history.push('/your-pallete')
            }}>
                <h2>My Pallete</h2>
            </Headingbox>
            <Headingbox onClick={() => history.push('/')}>
                <h1>Colorify</h1>
            </Headingbox>
            <Headingbox>
                 <FaMoon fontSize="25px"/>
            </Headingbox>
        </Navbardiv>
    )
}

const Navbardiv = styled.div`
display: flex;
align-items: center;
width: 100%;
min-height: 10vh;
justify-content: space-around;
`

const Headingbox = styled.div`

cursor: pointer;
z-index:5;

h2{
    font-size: 1.5rem;
}

h1{
    font-size: 2.4rem;
}

`

export default Navbar
