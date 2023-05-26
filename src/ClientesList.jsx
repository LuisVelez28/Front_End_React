import React, { useEffect, useState } from 'react';

const ClientesList = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/clientes')
            .then(res => res.json())
            .then(data => setClientes(data))
            .catch(error => console.log(error))
    }, []);

    const handleDelete = (id) => {
        fetch(`http://127.0.0.1:8000/api/countries/${id}`, {
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
                        <p>Nombre del cliente: {cliente.nombre}</p>
                        <p>Cedula del cliente: {cliente.cliente}</p>
                        <p>Telefono del cliente: {cliente.telefono}</p>
                    </div>
                    <button onClick={() => handleDelete(country.id)} className='btn btn-danger btn-sm mt-4'>Eliminar</button>
                <hr />
            </div>
            ))}
        </div>
    );
};

export default ClientesList;


