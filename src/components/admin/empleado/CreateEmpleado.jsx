

const CreateEmpleado = () => {
    
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Empleados</h1>
    </div>
    <br />
    <div className="container">
        <div className="row">
            <div className="col-12">
                <form className="form-control" id="formulario" method="post" action="{{ route('empleados.store') }}">
                    @csrf
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" name="nombre" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cedula" className="form-label">Cedula</label>
                        <input type="text" className="form-control" id="cedula" name="cedula" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Telefono</label>
                        <input type="text" className="form-control" id="telefono" name="telefono" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tipo" className="form-label">Tipo</label>
                        <select className="form-control" name="id_tipo_empleado" id="tipo_empleado">
                            
                                <option value="{{ $tipo_empleado->id }}">{{ $tipo_empleado->nombre }}
                                </option>
                            
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Crear</button>
                </form>
            </div>
        </div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Cedula</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>{{ $empleado->nombre }}</td>
                        <td>{{ $empleado->cedula }}</td>
                        <td>{{ $empleado->telefono }}</td>
                        <td>{{ $tipo }}</td>
                        <td>
                            <button onClick={handleEdit} className="btn btn-warning">Editar</button>
                            <form onSubmit={handleDelete} className="d-inline">
                                <button type="submit" className="btn btn-danger">Eliminar</button>
                            </form>
                        </td>
                    </tr>
            </tbody>
        </table>
    </div>
        </>
    )

}

export default CreateEmpleado
