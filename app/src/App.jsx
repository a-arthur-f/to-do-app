import { React, useState, useEffect } from 'react';
import axios from 'axios';
import TasksContainer from './components/TasksContainer';
import Task from './components/Task';
import AddEdit from './components/AddEdit';
import styled from 'styled-components';

const api = 'http://localhost:8080/task';
const StyledDiv = styled.div`
    html, body {
        width: 100%;
    }

    margin: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function App() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    
    const [mode, setMode] = useState('Add');
    const [text, setText] = useState('');

    async function fetchData() {
        try {
            const { data } = await axios(api);
            setTasks([...data.data]);
        } catch(e) {
            console.log('Erro ao buscar os dados')
        }
    }

    async function postTask() {
        try {
            await axios.post(api, { text });
            fetchData();
        } catch(e) {
            console.log('Erro ao adicionar dados');
        }
    }

    async function deleteTask(id) {
        try {
            await axios.delete(`${api}/${id}`);
            fetchData();
        } catch(e) {
            console.log('Erro ao deletar tarefa');
        }
    }

    function addEdit() {
        if(mode === 'Add') postTask();
    }

    function onChange(e) {
        setText(e.target.value);
    }

    const tasksArr = tasks.map(e => <Task 
        className="task"
        key={e._id}
        ask data={{text: e.text, _id: e._id}} 
        deleteTask={deleteTask}
        />
    );

    return (
        <StyledDiv>
            <AddEdit className="add-edit" addEdit={addEdit} value={text} onChange={onChange} mode={mode}/>
            <TasksContainer className="tasks-container" tasks={tasksArr} />
        </StyledDiv>
    )
}

export default App;