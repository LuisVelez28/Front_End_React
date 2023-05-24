function App() {
  return (
    <>
      <main role="main-home-wrapper" class="container">

        <div class="row">

          <section class="col-xs-12 col-sm-6 col-md-6 col-lg-6 ">
            <article role="pge-title-content">
              <header>
                <h2 className="textoPincipal">Clientes</h2>
              </header>
              <h5>Queridos clientes</h5>
              <p>
                ¡En nuestro servicio de transporte, ustedes son nuestra mayor inspiración y motivación!
                Nos enorgullece servirles y brindarles una experiencia excepcional en cada
                viaje que emprenden con nosotros.
                Ya sean viajeros frecuentes, turistas aventureros, profesionales ocupados,
                grupos de amigos o familias, personas mayores, estudiantes ansiosos de conocimiento,
                viajeros de aeropuertos o aquellos
                que nos eligen de vez en cuando, queremos recordarles lo especiales que son para nosotros.</p>
            </article>
          </section>



          <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                      <span class="card-title center">Este formulario registra una nueva venta</span>
                  </div>
                  <div class="card-action">
                      <div class="row center">
                          <div class="col s12">
                              <form id="formulario">
                                  <input type="text" name="empleado" placeholder="Nombre del Empleado" id="empleado"></input>
                                  <input type="text" name="cliente" placeholder="Nombre del Cliente" id="cliente"></input>
                                  <input type="text" name="producto" placeholder="Nombre del Producto" id="producto"></input>
                                  <input type="number" name="precio" placeholder="Precio del Producto" id="precio"></input>
                                  <input type="date" name="fecha" id="fecha" placeholder="Fecha de la Compra"></input>
                                  <button type="submit" class="waves-effect waves-light btn-large" onclick="guardar()">Guardar</button>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
    )
}

export default App
