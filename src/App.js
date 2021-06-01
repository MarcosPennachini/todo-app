import React, {useReducer, useState, useEffect, useCallback} from 'react';
import {todoReducer} from './todoReducer';
import List from './components/List'
import Form from './components/Form';
import './App.css';

// Función init del reducer. Inicializa el "initialState"
const init = () => {
    return  localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
}

const App = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);
    const [value, setValue] = useState('');
    console.log(value)
    
    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    // Callback para evitar que se re renderice el ícono de trash por cada cambio del input en Form
    const handleDelete = useCallback((id) => {
        dispatch({
          type: 'delete',
          payload: id
      });
    }, [])

    const handleComplete = useCallback((id) => {
        dispatch({
          type: 'complete',
          payload: id
      });
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim().length === 0){
            return;
        }
        const newTodo = {
            id: Date.now(),
            desc: value,
            done: false
        }

        dispatch({
          type: 'add',
          payload: newTodo
      });
        setValue('');
    }



    return (
        <div className="container">
            <h1>TodoApp <span className="badge badge-secondary"> {todos.length} </span></h1>

            <hr />
            
            <div className="row pt-4">

                <List 
                    todos={todos}
                    handleDelete={ handleDelete } 
                    handleComplete={handleComplete}
                />

                <Form 
                    handleSubmit={handleSubmit} 
                    value={value}
                    setValue={setValue}
                />
            </div>
        </div>
    )
}

export default App
