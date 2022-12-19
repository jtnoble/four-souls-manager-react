import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router'

export const OpenerPage = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/character_selection');
  }
  return (
    <div className='App'>
        <div className='App-header'>
            <h1>Four Souls Manager</h1>
            <button onClick={handleClick}>Click To Continue</button>
        </div>
    </div>
  )
}

