import { React, useState, useEffect } from 'react';
import axios from 'axios';
import TasksContainer from './components/TasksContainer';
import Task from './components/Task';
import AddEdit from './components/AddEdit';
import './style.css';

const api = 'http://localhost:8080/task';

function App() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    
    const [text, setText] = useState('');

    async function fetchData() {
        try {
            const { data } = await axios(api);
            const sortedArray = [...data.data].sort((a, b) => {
                if(b.status === false && a.status === true) return 1;
                return -1;
            })
            setTasks([...sortedArray]);
        } catch(e) {
            console.log('Erro ao buscar os dados')
        }
    }

    async function postTask() {
        try {
            await axios.post(api, { text });
            setText('');
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

    async function updateTask(id) {
        try {
            await axios.put(`${api}/${id}`);
            fetchData();
        } catch(e) {    
            console.log('Erro ao atualizar tarefa');
        }
    }

    function onChange(e) {
        setText(e.target.value);
    }

    const tasksArr = tasks.map(e => <Task 
        className="task"
        key={e._id}
        data={{text: e.text, _id: e._id, status: e.status}} 
        deleteTask={deleteTask}
        updateTask={updateTask}
        />
    );

    return (
        <div className="container">
            <AddEdit className="add-edit" postTask={postTask} value={text} onChange={onChange}/>
            <TasksContainer className="tasks-container" tasks={tasksArr} />
        </div>
    )
}

export default App;