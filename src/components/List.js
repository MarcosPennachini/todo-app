import React, {memo} from 'react'
import { BsTrashFill } from "react-icons/bs";

const List = ({todos, handleDelete, handleComplete}) => {
    return (
        <>
            <div className="col-lg-7 col-md-7">
                <h6 className="text-secondary">Listado</h6>
                <ul className="list-group">
                    { 
                        todos.map(todo => 
                            <li 
                                key={todo.id}   
                                className="list-group-item text-start d-flex justify-content-between align-items-center" 
                            > 
                                <input 
                                    className="form-check-input m-0" type="checkbox" value=""
                                    onChange={ () => handleComplete(todo.id)}
                                    checked={ todo.done }
                                >
                                </input>
                                { todo.done ? (<p className="px-2 complete"> {todo.desc} </p>) : (<p className="px-2"> {todo.desc} </p>)}
                                 
                                <button 
                                    onClick={ () => handleDelete(todo.id)}
                                    className="btn btn-outline-danger btn-sm"
                                > 
                                    
                                    <BsTrashFill />  
                                </button>
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default memo(List) //Componente memorizado para evitar re renderizado por cada cambio de input en Form
