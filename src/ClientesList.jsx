import React, { useEffect, useState } from 'react';

const ClientesList = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/clientes')
            .then(res => res.json())
            .then(data => setClientes(data))
            .catch(error => console.log(error))
    }, []);

    const handleDelete = (id) => {
        fetch(`http://127.0.0.1:8000/api/clientes/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                } else {
                    console.error('Error al eliminar el país:', data.error);
                }
            })
            .catch(error => console.error('Error al realizar la llamada a la API:', error));
    };

    return (
        <div className='container text-center'>
            <h1>Lista de Clientes</h1>
            {clientes.map(cliente => (
                <div key={cliente.id}>
                    <div>
                            <p><b>Nombre del cliente: </b>{cliente.nombre}</p>
                            <p><b>Cedula del cliente: </b>{cliente.cedula}</p>
                            <p><b>Telefono del cliente: </b>{cliente.telefono}</p>
                    </div>
            </div>
            ))}
        </div>
    );
};

export default ClientesList;


