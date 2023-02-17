import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router'
import '../styles/CharacterPage.css'

export const CharacterControls = () => {




    
    const { state } = useLocation();
    const character = state;

    return (
        <div>CharacterControls</div>
    )
}
