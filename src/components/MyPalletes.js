import React from 'react'
import styled from 'styled-components'
import { removeitem } from '../featues/colorarray'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {FaTrashAlt} from 'react-icons/fa'


function MyPalletes() {


    const dispatch = useDispatch()
    const colordata = useSelector(state => state.palette.colorarray)
    const removed = (id) => {
        const filtered = colordata.filter(state => state.id !== id)
        dispatch(removeitem(filtered))
    }
    const history = useHistory()

    const findit = (id) => {
        const finding = colordata.find(state => state.id === id)
        console.log(finding)
        history.push(`/your-pallete/${id}`)
    }

    return (
        <Mypage>
            {colordata.map((entry,i) => {
                return <div key={i} className="link" >
                    <h3 onClick={() => findit(entry.id)}>{`palette ${i + 1}`}</h3>
                    <FaTrashAlt onClick={() => removed(entry.id)}/>
                </div>
            })}
        </Mypage>
    )
}

const Mypage = styled.div`
background-color: #000;
color: #fff;
display: flex;
align-items: center;
/* justify-content: center; */
flex-direction: column;
width: 100%;
min-height: 100vh;

div{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 20rem;
}

svg{
    width: 30px;
    height: 30px;
}

.link{
    /* padding: 1rem 2rem; */
    margin: 1rem 0;

    h3{
        font-size: 2rem;
        cursor: pointer;
    }
}
`

export default MyPalletes
