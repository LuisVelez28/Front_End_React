
const Contactanos = () => {

    return (
        <>
            <h1>Contáctanos</h1>
            <p>Envíanos tus comentarios y sugerencias</p>
            <form action="{{ route('pqrs.store') }}" method="POST">
                @csrf
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" name="nombre_cliente" placeholder="Escribe tu nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Escribe tu email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                    <textarea className="form-control" id="mensaje" name="mensaje" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </>
    )

}

export default Contactanos


