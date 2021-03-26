import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

function Task({ className, deleteTask, updateTask, data}) {
    return (
        <div className={className}>
            <span className="text">{data.text}</span>
            <span className="actions">
                <Button 
                    className="action done material-icons" 
                    text="done" 
                    onClick={() => updateTask(data._id)}
                    width="2rem"/>
                <Button 
                    className="action material-icons"
                    text="delete_outline" 
                    onClick={() => deleteTask(data._id)} 
                    width="2rem"/>
            </span>
        </div>
    )
}

const StyledTask = styled(Task)`
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 1.5rem;
    padding: .4rem .6rem;
    box-shadow: 1px 2px 2px rgba(0,0,0,0.3);
    margin-bottom: .4rem;
    background: ${props => props.data.status === false ? 'white' : 'lightgreen'};
    color: ${props => props.data.status === false ? 'black' : 'white'};

    .done {
        display: ${props => props.data.status === false ? 'inline' : 'none'};
    }

    .action {
        width: ${props => props.data.status === false ? '50%' : '100%'};
        background: ${props => props.data.status === false ? 'white' : 'lightgreen'};
        color: ${props => props.data.status === false ? 'black' : 'white'};
        text-align: center;
    }

    .action:hover {
        background: #e2c0ea;
    }
`;

export default StyledTask;