import React, { useState } from 'react';
import styled from 'styled-components'

import Button from './Button'
import data from '../data.json'

const Exercise4 = () => {
    const [count, setCount] = useState(0)
    const [active, setActive] = useState(null)

    const newSpeech = () => setCount(count => count + 1)
    const oldSpeech = () => setCount(count => count - 1)

    const highLightElement = () => setActive(true)

    console.log(active)

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

    :active{
        background-color: red;
    }
    `;

    const ss = {
        backgroundColor: '#ccc',
        fontSize: 24
    }
    return (
        <div>
            <Button
                title="Adelante"
                onClick={highLightElement}
            />

            <Button
                title="Atras"
                onClick={oldSpeech} />
            <List>
                {data.map((speech, index) => {
                    return <ListItem 
                    key={index}
                    style={index % index + 1 ? ss : null }
                   // onChange={ highLightElement}
                   // style={{color: active.color, height: active.height}}
                    >{speech}</ListItem>
                }
                )}
            </List>
        </div>
    )
}

export default Exercise4;
