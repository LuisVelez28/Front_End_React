import { useState } from "react";

const Contactanos = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const pqrs = {
            nombre_cliente: nombre,
            email: email,
            mensaje: mensaje
        }
        console.log(JSON.stringify(pqrs));
        //post to api
        fetch("http://127.0.0.1:8000/api/pqrs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pqrs)
        })
        .then(res => res.json())
        .then(data => {
            console.log("PQRS guardada con exito:", data);
        })
        .catch(error => console.error("Error al guardar la PQRS:", error));


    }

    return (
        <>
            <h1>Contáctanos</h1>
            <p>Envíanos tus comentarios y sugerencias</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input value={nombre} onChange={e => setNombre(e.target.value)} type="text" className="form-control" placeholder="Escribe tu nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" placeholder="Escribe tu email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                    <textarea value={mensaje} onChange={e => setMensaje(e.target.value)} className="form-control" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </>
    )

}

export default Contactanos


