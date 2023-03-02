import React, { useState } from 'react'
import { createContext } from 'react'

const QuizContext = createContext('');

export default function QuizHolder(props) {
    const { start, setStart } = useState(false);
    const { exit, setExit } = useState(false);

    return (
        <QuizContext.Provider value={{
            start, exit, setStart, setExit
        }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export { QuizContext };