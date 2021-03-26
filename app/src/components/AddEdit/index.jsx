import { React, createRef } from 'react';
import styled from 'styled-components';
import Button from '../Button';

function AddEdit({className, value, onChange, postTask }) {
    const ref = createRef();
    function inputFocus() {
        ref.current.focus();
    }
    function inputOnChange(e) {
        onChange(e);
    }

    return (
        <div className={className}>
            <input 
                className="add-edit-input" 
                type="text" 
                value={value} 
                onChange={inputOnChange}
                onKeyDown={e => {
                    if(e.key === 'Enter') postTask();
                }}
                ref={ref}/>
            <Button 
                className="add-edit-button" 
                onClick={() => {
                postTask(); 
                inputFocus();
            }} 
                text="Add"
                background="#bc6dce"
                color="white"/>
        </div>
    )
}

const StyledAddEdit = styled(AddEdit)`
    .add-edit-input {
        width: 300px;
        margin-right: 1.2rem;
    }

    .add-edit-input:focus {
        outline: none;
    }

    .add-edit-button:hover {
        background: #e2c0ea;
    }
`;

export default StyledAddEdit;