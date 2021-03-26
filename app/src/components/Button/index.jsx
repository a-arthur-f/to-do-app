import React from 'react';
import styled from 'styled-components';

function Button({ className, text, onClick }) {
    return <button className={className} onClick={onClick}>{text}</button>
}

const StyledButton = styled(Button)`
    color: ${props => props.color || 'black'};
    background: ${props => props.background || 'white'};
    border: none;
    width: ${props => props.width || '6rem'};
    height: 2rem;
    border-radius: .2rem;
    cursor: pointer;
`;

export default StyledButton;