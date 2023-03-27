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
            <img className="Plus-Minus" src={require("../../images/plus.png")} alt="+" onClick={AddNumber}/>
            <img className="Plus-Minus" src={require("../../images/minus.png")} alt="-" onClick={SubtractNumber}/>
            <h1 style={{fontSize: "40px", textAlign: "center", color: "white"}}onClick={ResetNumber}>{number}</h1>
        </>
    )
}
