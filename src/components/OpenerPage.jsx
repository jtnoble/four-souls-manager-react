import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router'

export const OpenerPage = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/character_selection');
  }

  const clearLocalStorage = () =>{
    localStorage.clear();
    alert("Local Data Cleared!");
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
              V 0.9.1
              <li>QOL Updates</li>
              <li>Added changelog</li>
              <li>Added "Clear Data" button on opening screen</li>
            </span>
            <span id='Author-Credit'>Created by Jtnoble</span>
        </div>
    </div>
  )
}

