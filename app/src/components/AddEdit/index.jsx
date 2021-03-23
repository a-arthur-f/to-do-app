import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

function AddEdit({className, value, onChange, mode, addEdit }) {
    function inputOnChange(e) {
        onChange(e);
    }

    return (
        <div className={className}>
            <input 
                className="add-edit-input" 
                type="text" 
                value={value} 
                onChange={inputOnChange}/>
            <Button 
                className="add-edit-button" 
                onClick={addEdit} 
                text={mode}
                background="#bc6dce"
                color="white"/>
        </div>
    )
}

const StyledAddEdit = styled(AddEdit)`
    .add-edit-input {
        margin-right: 1.2rem;
    }
`;

export default StyledAddEdit;