import React, { useState } from 'react';
import styled from 'styled-components'

import Button from './Button'
import data from '../data.json'

const Exercise4 = () => {
    const [count, setCount] = useState(0)

    const newSpeech = () => setCount(count => count + 1)
    const oldSpeech = () => setCount(count => count - 1)

    let speech = data[count];

    return (
        <div>
            <Button
                title="Adelante"
                onClick={newSpeech}
            />

            <Button
                title="Atras"
                onClick={oldSpeech} />
                <ul>
                    {data.map((speech, index) => {
                        return <li key={index}>{speech}</li>}
                    )}
                </ul>
        </div>
    )
}

export default Exercise4;
