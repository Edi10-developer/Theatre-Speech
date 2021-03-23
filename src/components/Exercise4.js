import React, { useState } from 'react';
import styled from 'styled-components'

import Button from './Button'
import data from '../data.json'

const Exercise4 = () => {
    const [count, setCount] = useState(0)

    const newSpeech = () => setCount(count => count + 1)
    const oldSpeech = () => setCount(count => count - 1)

    const [highLight, setHightLight] = useState('')
    let key = data[count];
    console.log(data[count])
    // Style
    const Paragraph = styled.p`background-color: red;`
    const List = styled.ul`
    list-style-type: none;
    border: 1px solid rgba(0, 0, 0, .4);
    padding-left: 0;
    `;
    const ListItem = styled.li`
    border: 1px solid #ccc;
    padding: .4rem;
    font-weight: 500;
    padding-left: 1rem;
    `;

    return (
        <div>
            <Button
                title="Adelante"
                onClick={newSpeech}
            />

            <Button
                title="Atras"
                onClick={oldSpeech} />
            <List>
                {data.map((speech, index) => {
                    return <ListItem key={index}>{speech}</ListItem>
                }
                )}
            </List>
        </div>
    )
}

export default Exercise4;
