import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

function Task({ className, deleteTask, data}) {
    return (
        <div className={className}>
            <span className="text">{data.text}</span>
            <span className="actions">
                <Button className="material-icons" text="done" width="2rem"/>
                <Button className="material-icons" text="mode" width="2rem"/>
                <Button 
                    className="material-icons"
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

    box-shadow: 1px 2px 2px rgba(0,0,0,0.3);
    margin-bottom: 1rem;
 
`;

export default StyledTask;