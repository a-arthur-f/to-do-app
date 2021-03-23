import React from 'react';
import styled from 'styled-components';

function TasksContainer({ className, tasks }) {
    return (
        <div className={className}>
            {tasks}
        </div>
    )
}

const StyledTasksContainer = styled(TasksContainer)`
    width: 500px;
    margin-top: 2.2rem;
`;

export default StyledTasksContainer;