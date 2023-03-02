import React from 'react';
import { QuizContext } from '../../context/QuizHolder';
import './start.css'
import { useContext } from 'react';


export default function Start() {
    const { setStart } = useContext(QuizContext)
    return (
        <div className='border'>
            <button onClick={()=> setStart(true)} className='buttonStart'>Start</button>
        </div>
    )
}