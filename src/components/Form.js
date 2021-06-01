import React from 'react'

const Form = ({handleSubmit, setValue, value}) => {


    return (
        <>
            <div className="col-lg-5 col-md-5">
                <h6 className="text-secondary">Agregar</h6>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-2">
                        <input 
                            type="text" autoComplete="off" className="form-control" id="description" placeholder="Nueva tarea"
                            onChange={ (e) => 
                                setValue(e.target.value)
                            } 
                            value={value}
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-primary float-end">Agregar</button>
                </form>
            </div>
        </>
    )
}

export default Form
