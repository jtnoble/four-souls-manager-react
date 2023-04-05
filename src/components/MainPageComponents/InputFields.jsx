import React from 'react'
import { useState, useEffect } from 'react';
import { Counting } from './Counting';

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

  return (
    <div>
        <input className='Overlay-Input-Fields' type="text" value={inputValue} onChange={handleChange} />
    </div>
  )
}
