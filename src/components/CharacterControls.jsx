import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router'
import '../styles/CharacterPage.css'
import { Attack } from './MainPageComponents/Attack'
import { BottomButtons } from './MainPageComponents/BottomButtons'
import { Health } from './MainPageComponents/Health'

export const CharacterControls = () => {
    
    const { state } = useLocation();
    const character = state;

    return (
        <div id='Controls-Area'>
            <Health/>
            <Attack/>
            <BottomButtons/>
        </div>
    )
}
