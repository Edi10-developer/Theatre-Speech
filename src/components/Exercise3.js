import React, { useState } from 'react';
import Button from './Button'
import data from '../data.json'

const Exercise3 = () => {
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
            <h3>{speech}</h3>
        </div>
    )
}

export default Exercise3;
