import React from 'react'
import { useState, useEffect } from 'react';

export const InputFields = (props) => {
      
    const [inputValue, setInputValue] = useState(() => {
        const savedInput = localStorage.getItem(props.inputNum);
        return savedInput !== null ? JSON.parse(savedInput) : '';
      });;
      useEffect(() => {
        localStorage.setItem(props.inputNum, JSON.stringify(inputValue));
      }, [inputValue]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const [count, setCount] = useState(() => {
      const savedCount = localStorage.getItem(props.inputNum + "_count");
      return savedCount !== null ? JSON.parse(savedCount) : 0;
    });
  
    useEffect(() => {
      localStorage.setItem(props.inputNum + "_count", JSON.stringify(count));
    }, [count]);
  
    const increment = () => {
      if (count + 1 < 100) {setCount(prevCount => prevCount + 1);}
    };
  
    const decrement = () => {
      if (count - 1 > -1) {setCount(prevCount => prevCount - 1);}
    };
  const ResetNumber = () => {
      setCount(0);
  }

  return (
    <div>
        <input className='Overlay-Input-Fields' type="text" value={inputValue} onChange={handleChange} />
        <div style={{padding: "10px"}}>
          <img className="Counting-Input-Fields" style={{width: "40px", height: "40px"}} src={require("../../images/plus.png")} alt="+" onClick={increment}/>
          <img className="Counting-Input-Fields" style={{width: "40px", height: "40px"}} src={require("../../images/minus.png")} alt="-" onClick={decrement}/>
          <h1 className="Counting-Input-Fields" style={{fontSize: "40px", textAlign: "center", color: "white"}} onClick={ResetNumber}>{count}</h1>
        </div>
    </div>
  )
}
