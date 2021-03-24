import React, { useState } from 'react';
import styled from 'styled-components'

import Button from './Button'
import data from '../data.json'

const Exercise4 = () => {
    const [count, setCount] = useState(0)

    const newSpeech = () => setCount(count => count + 1)
    const oldSpeech = () => setCount(count => count - 1)

    const isRight = false;

    // Style
    const List = styled.ul`
    list-style-type: none;
    border:          1px solid rgba(0, 0, 0, .4);
    padding-left:    0;
    `;
    const ListItem = styled.li`
    background-color: ${({ highLighted }) => highLighted ? '#ffa551' : 'white'};
    border:           ${({ highLighted }) => highLighted ? '1px solid red' : '1px solid #ccc'};
    padding:          ${({ highLighted }) => highLighted ? '.7rem' : '.4rem'};
    font-weight:      ${({ highLighted }) => highLighted ? 500 : 600};
    fontFamily:       ${({ highLighted }) => highLighted ? 'Droid Sans' : 'Roboto'};
    padding-left:     1rem;
    }
    `;

    return (
        <div>
            <Button
                title="Adelante"
                onClick={newSpeech}
            />
            <Button
                title="Atras"
                onClick={oldSpeech}
            />
            <List>
                {data.map((speech, index) => {
                    return (
                        <ListItem
                            key={index}
                            highLighted={index == count}
                        >
                            {speech}
                        </ListItem>
                    )
                }
                )}
            </List>
        </div>
    )
}

export default Exercise4;
