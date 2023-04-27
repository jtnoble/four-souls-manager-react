import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router'

export const OpenerPage = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/character_selection');
  }

  const clearLocalStorage = () =>{
    const result = window.confirm("Clear your local data? (This will clear any counters, health points and attack points!)");
        if (result) {
            localStorage.clear();
        }
        return;
  };

  return (
    <div className='App'>
        <div className='App-header'>
            <h1>Four Souls Manager</h1>
            <div id='Main-Menu-Buttons'>
              <button className='Main-Menu-Buttons' onClick={handleClick}>Click To Continue</button>
              <button className='Main-Menu-Buttons' onClick={clearLocalStorage}>Clear Data</button>
            </div>
            <span>
              V 0.9.2
              <li>Added "Home" button to play page</li>
              <li>Added verification for clearing data</li>
            </span>
            <span id='Author-Credit'>Created by Jtnoble</span>
        </div>
    </div>
  )
}

