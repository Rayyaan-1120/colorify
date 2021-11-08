import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import Palleteone from './palleteone'
import { useLocation } from 'react-router-dom'


const Palettecomponent = () => {

    const location = useLocation()
    const id = location.pathname.slice(14)

    const color = useSelector(state => state.palette.colorarray)
    const finding = color.find(state => state.id === id)

    return(
       <Maindiv>
         {color && (
                 <>
              <Palleteone entry={finding.color1}/>
              <Palleteone entry={finding.color2}/>
              <Palleteone entry={finding.color3}/>
              <Palleteone entry={finding.color4}/>
              <Palleteone entry={finding.color5}/>
              </>
   )
         }
       </Maindiv>
    )
}

const Maindiv = styled.div`
width: 100%;
display: flex;
align-items: center;
min-height: 90vh;

@media (max-width:768px){
    width:100%;
    flex-direction:column;
    
}
`

export default Palettecomponent