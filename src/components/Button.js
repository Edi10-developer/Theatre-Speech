import React from 'react';
import styled from 'styled-components'

class Button extends React.Component {

    render() {
        const ButtonStyled = styled.button`
        width: 49%;
        height: 46px;
        font-weight: 600;
        cursor: pointer;
        transition: all 300ms;

        :hover{
            background-color: #b5b3b3;
        }
        `;
        return (
            <ButtonStyled
                onClick={this.props.onClick}
                value={this.props.value}>
                {this.props.title}   
            </ButtonStyled>
        )
    }
}
export default Button;