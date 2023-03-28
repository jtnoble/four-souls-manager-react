import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import '../../styles/CharacterPage.css'


export const Counting = (props) => {

    const [count, setCount] = useState(() => {
        const savedCount = localStorage.getItem(props.countType);
        return savedCount !== null ? JSON.parse(savedCount) : props.startValue;
      });
    
      useEffect(() => {
        localStorage.setItem(props.countType, JSON.stringify(count));
      }, [count]);
    
      const increment = () => {
        if (count + 1 < 100) {setCount(prevCount => prevCount + 1);}
      };
    
      const decrement = () => {
        if (count - 1 > -1) {setCount(prevCount => prevCount - 1);}
      };
    const ResetNumber = () => {
        setCount(props.startValue);
    }

    return (
        <>
            <img className="Plus-Minus" src={require("../../images/plus.png")} alt="+" onClick={increment}/>
            <img className="Plus-Minus" src={require("../../images/minus.png")} alt="-" onClick={decrement}/>
            <h1 style={{fontSize: "40px", textAlign: "center", color: "white"}}onClick={ResetNumber}>{count}</h1>
        </>
    )
}
