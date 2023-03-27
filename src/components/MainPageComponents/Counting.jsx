import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router'
import '../../styles/CharacterPage.css'


export const Counting = (props) => {
    const startValue = props.startValue;
    const [ number, setNumber ] = useState(startValue);
    const AddNumber = () => {
        if (number + 1 < 100){
            setNumber(number + 1);
        }
    }
    const SubtractNumber = () => {
        if (number - 1 > -1){
            setNumber(number - 1);
        }
    }
    const ResetNumber = () => {
        setNumber(startValue);
    }
    return (
        <>
            <h1 onClick={AddNumber}>+</h1>
            <h1 onClick={SubtractNumber}>-</h1>
            <h1 onClick={ResetNumber}>{number}</h1>
        </>
    )
}
