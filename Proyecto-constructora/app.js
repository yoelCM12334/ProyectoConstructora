function portal() {
	let TK = `
	<header>
		<div class="position-relative">
  			<img src="res/logotipo.png" class="position-absolute top-0 start-1" style="width: 100px; margin: 20px;">
		</div>
		<nav style="display: flex; justify-content: space-between; align-items: center; padding: 18px 34px; background-color: ; color: white;">
  			<div>
    			<img src="logotipo.png" alt="Logo" id="logo" style="width: 90px; height: 100px; transform: scale(0); transition: transform 0.16s ease-out;">
  			</div>
				<ul class="list-unstyled d-flex gap-4">
  					<li><a href="#" onclick="inicio(); marcarActivoYFondo(document.getElementById('nav-inicio'), 'tema azul')" class="text-light text-decoration-none">Inicio</a></li>
  					<li><a href="#" onclick="nosotros(); marcarActivoYFondo(document.getElementById('nav-nosotros'), 'royalblue')" class="text-light text-decoration-none">Quiénes Somos</a></li>
					<li><a href="#" onclick="Proyectos(); marcarActivoYFondo(document.getElementById('nav-Proyectos'), 'lightgreen')" class="text-light text-decoration-none">Proyectos</a></li>
  					<li><a href="#" onclick="servicios(); marcarActivoYFondo(document.getElementById('nav-servicios'), 'lightgreen')" class="text-light text-decoration-none">Servicios</a></li>
					<li><a href="#" onclick="Productos(); marcarActivoYFondo(document.getElementById('nav-Productos'), 'lightgreen')" class="text-light text-decoration-none">Productos</a></li>
  					<li><a href="#" onclick="contactos(); marcarActivoYFondo(document.getElementById('nav-contactos'), 'skyblue')" class="text-light text-decoration-none">Contactos</a></li>
  					<li><a href="#" onclick="login(); marcarActivoYFondo(document.getElementById('nav-login'), 'skyblue')" class="text-light text-decoration-none">login</a></li>
				</ul>
		</nav>
	</header>
	<main id='C2'></main>
	<footer>
	<div class="bg-dark text-light pt-4 mt-5">
		<div class="container">
			<div class="row">
				<!-- Navegación -->
				<div class="col-md-4 mb-4">
					<a class="navbar-brand fw-bold" href="#">
  						<span style="color: #00bfff;">NAVEG</span><span style="color: #666;">ACION</span>
					</a>
					<ul class="list-unstyled">
						<li><a href="#" onclick="inicio(); marcarActivoYFondo(document.getElementById('nav-inicio'), 'blue')" class="text-light text-decoration-none">Inicio</a></li>
						<li><a href="#" onclick="nosotros(); marcarActivoYFondo(document.getElementById('nav-nosotros'), 'royalblue')" class="text-light text-decoration-none">Quiénes Somos</a></li>
						<li><a href="#" onclick="Proyectos(); marcarActivoYFondo(document.getElementById('nav-Proyectos'), 'skyblue')" class="text-light text-decoration-none">Proyectos</a></li>
						<li><a href="#" onclick="servicios(); marcarActivoYFondo(document.getElementById('nav-servicios'), 'lightgreen')" class="text-light text-decoration-none">Servicios</a></li>
						<li><a href="#" onclick="Productos(); marcarActivoYFondo(document.getElementById('nav-Productos'), 'lightgreen')" class="text-light text-decoration-none">Productos</a></li>
						<li><a href="#" onclick="contactos(); marcarActivoYFondo(document.getElementById('nav-contactos'), 'skyblue')" class="text-light text-decoration-none">Contactos</a></li>
						<li><a href="#" onclick="login(); marcarActivoYFondo(document.getElementById('nav-login'), 'skyblue')" class="text-light text-decoration-none">login</a></li>
					</ul>
				</div>
				<!-- Redes Sociales -->
				<div class="col-md-4 mb-4 text-center">
					<h5 class="text-uppercase">Nuestras Redes</h5>
					<a href="https://www.whatsapp.com" target="_blank" class="me-3">
						<i class="fab fa-whatsapp fa-2x" style="color:#25D366;"></i>
					</a>
					<a href="https://www.facebook.com" target="_blank" class="me-3">
						<i class="fab fa-facebook fa-2x" style="color:#1877F2;"></i>
					</a>
					<a href="#" class="me-3">
						<i class="fab fa-youtube fa-2x" style="color:#FF0000;"></i>
					</a>
				</div>
				<!-- Información de contacto -->
				<div class="col-md-4 mb-4">
					<h5 class="text-uppercase">Oficina de Guibcar S.R.L.</h5>
					<p>Dirección 1: Calle Rigoberto Paredez #1165, Piso 1, OF1A</p>
					<p>Dirección 2: Av. Mcl. Santa Santa, Edif. El Primer Piso 6, Of. 8 Bloque B</p>
					<p><i class="fa fa-phone me-2"></i>Celular: 73085230 | Teléfono: 2-2311082</p>
					<p><i class="fa fa-envelope me-2"></i>
						<a href="mailto:guibcarO1ingenieros@gmail.com" class="text-light">guibcarO1ingenieros@gmail.com</a>
					</p>
				</div>
			</div>
		</div>
		<!-- Derechos -->
		<div class="text-center bg-secondary py-2">
			<p class="mb-0">&copy; Todos los derechos reservados - 2025</p>
		</div>
	</div>
	</footer>`;
	document.body.innerHTML = TK;
	document.body.style.backgroundColor = ' #0dcaf0'; // inicio por defecto
	inicio();
}

function marcarActivoYFondo(elemento, colorFondo) {
	let links = document.querySelectorAll(".navbar-brand");
	links.forEach(link => link.classList.remove("nav-activo"));
	elemento.classList.add("nav-activo");
	document.body.style.backgroundColor = colorFondo;
}

function inicio() {
	let TK = `
	<section class="carousel slide carousel-dark carousel-fade" id="sl1" data-bs-touch="true" data-bs-ride="carousel">
		<article class="carousel-indicators">
			<button data-bs-target="#sl1" data-bs-slide-to="0" class="active"></button>
			<button data-bs-target="#sl1" data-bs-slide-to="1" ></button>
			<button data-bs-target="#sl1" data-bs-slide-to="2" ></button>
		</article>
		<article class="carousel-inner">
			<aside  data-bs-interval="3000" class="carousel-item active">
				<img src="res/construye obras.jpg" class="d-block w-100 ">
				<div class="carousel-caption d-none d-md-block">
					<h5>GUIBCAR</h5>
					<p>CONSTRUCTORA</p> 
				</div>
			</aside>
			<aside data-bs-interval="5000" class="carousel-item">
				<img src="res/ob.jpg" class="d-block w-100 ">
				<div class="carousel-caption d-none d-md-block">
					<h5>GUIBCAR</h5>
					<p>Empresa constructora</p>
				</div>
			</aside>
			<aside data-bs-interval="1000" class="carousel-item">
				<img src="res/obr.jpg" class="d-block w-100 ">
				<div class="carousel-caption d-none d-md-block">
					<h5>CONSTRUCTORA</h5>
					<p>GUIBCAR</p>
				</div>
			</aside>
		</article>
		<button class="carousel-control-prev" data-bs-target="#sl1" data-bs-slide="prev">
			<span class="carousel-control-prev-icon"></span>
		</button>
		<button class="carousel-control-next" data-bs-target="#sl1" data-bs-slide="next">
			<span class="carousel-control-next-icon"></span>
		</button>
	</section>
	<section class="row row-cols-1 row-cols-md-3 m-2">
		<div class='col'>
			<article class="card">
				<img class="card-img-top" src="res/mejordeampl.jpg">
				<aside class="card-body">
					<h5 class="card-title">vivienda mejorada</h5>
					<p class="card-text">Somos una empresa constructora con experiencia, calidad y prestigio fundada el año en la ciudad de La Paz Bolivia. La empresa constructora GUIBCAR INGENIEROS inicia sus actividades en el año 2016 y sus comienzos estuvieron ligados al desarrollo de obras civiles en la ciudad de La Paz Bolivia el fundador, el Ingeniero Martin Guibarra, adelantándose a las continuas transformaciones que se sucederían en el mercado de las construcciones, tuvo la visión de ampliar el abanico de sus competencias y gracias a su espíritu de trabajo, tenacidad e innovación continua, la empresa se consolidó en diversas áreas de la construcción.</p>
				</aside>
			</article>
		</div>
		<div class='col'>
			
		</div>
		<div class='col'>
			<article class="card">
				<img class="card-img-top" src="res/fondo3.jpg">
				<aside class="card-body">
					<h5 class="card-title">Título</h5>
					<p class="card-text">Somos una empresa que construimos obras GUIBCAR INGENIEROS S.R.L. es una Empresa Constructora dedicada al diseño, planificación, construcción y administración de la ejecución de obras civiles. Con domicilio en La Paz – Calle Rigoberto Paredes Nº 1165, Piso: 1, Oficina: 1 A, Zona: Alto San Pedro y sus Oficinas Administrativas en la Avenida Mariscal Santa Cruz, Edificio: LA PRIMERA, Bloque: B, Piso: 6, Oficina: 8 La Empresa Constructora GUIBCAR INGENIEROS S.R.L. se encuentra predispuesta a proyectos que comprometan diferentes desafíos para así poder satisfacer las exigencias de cualquier entidad contratante, basados en el compromiso, entrega y responsabilidad hacia nuestro trabajo.</p>
				</aside>
			</article>
		</div>
	</section>
	<!-- Cartas 3D -->
        <section class="container my-5">
            <h2 class="text-center mb-4 text-with-image">Nuestros <span class="text-primary">Servicios</span></h2>
            <div class="row">
                <div class="col-md-4 card-container">
                    <div class="card-3d">
                        <div class="card-front">
                            <i class="fas fa-drafting-compass card-icon"></i>
                            <h3>Diseño Arquitectónico</h3>
                            <p>Pasa el cursor para más información</p>
                        </div>
                        <div class="card-back">
                            <h3>Diseño Arquitectónico</h3>
                            <p>Creación de planos y diseños personalizados para tu proyecto, con los más altos estándares de calidad y funcionalidad.</p>
                            <button class="btn btn-primary mt-3">Más información</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 card-container">
                    <div class="card-3d">
                        <div class="card-front">
                            <i class="fas fa-hard-hat card-icon"></i>
                            <h3>Construcción</h3>
                            <p>Pasa el cursor para más información</p>
                        </div>
                        <div class="card-back">
                            <h3>Construcción</h3>
                            <p>Ejecución de proyectos con materiales de primera calidad, cumpliendo con los plazos establecidos y normativas vigentes.</p>
                            <button class="btn btn-primary mt-3">Más información</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 card-container">
                    <div class="card-3d">
                        <div class="card-front">
                            <i class="fas fa-tools card-icon"></i>
                            <h3>Remodelaciones</h3>
                            <p>Pasa el cursor para más información</p>
                        </div>
                        <div class="card-back">
                            <h3>Remodelaciones</h3>
                            <p>Transformamos tus espacios con soluciones innovadoras, mejorando funcionalidad y estética de acuerdo a tus necesidades.</p>
                            <button class="btn btn-primary mt-3">Más información</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
	document.getElementById('C2').innerHTML = TK;
}



function nosotros() {
	let TK = `
	<a class="navbar-brand fw-bold" href="#">
  		<span class="text-dark">NOSO</span><span class="text-secondary">TROS</span>
	</a>
	<p class='m-2'>Platicamos sobre el equipo de trabajo</p>
	<section class="row row-cols-1 row-cols-md-3 m-2">
		<div class='col'>
			<article class="card">
				<img class="card-img-top" src="res/sala2.jpg">
				<aside class="card-body">
					<h5 class="card-title">Sala de guibcar</h5>
					<p class="card-text">Somos una empresa constructora con experiencia, calidad y prestigio fundada el año en la ciudad de La Paz Bolivia. La empresa constructora GUIBCAR INGENIEROS inicia sus actividades en el año 2016 y sus comienzos estuvieron ligados al desarrollo de obras civiles en la ciudad de La Paz Bolivia el fundador, el Ingeniero Martin Guibarra, adelantándose a las continuas transformaciones que se sucederían en el mercado de las construcciones, tuvo la visión de ampliar el abanico de sus competencias y gracias a su espíritu de trabajo, tenacidad e innovación continua, la empresa se consolidó en diversas áreas de la construcción.</p>
				</aside>
			</article>
		</div>
		<div class='col'>
			
		</div>
		<div class='col'>
			<article class="card">
				<img class="card-img-top" src="res/sala.jpg">
				<aside class="card-body">
					<h5 class="card-title">Oficina de guibcar</h5>
					<p class="card-text">Somos una empresa que construimos obras GUIBCAR INGENIEROS S.R.L. es una Empresa Constructora dedicada al diseño, planificación, construcción y administración de la ejecución de obras civiles. Con domicilio en La Paz – Calle Rigoberto Paredes Nº 1165, Piso: 1, Oficina: 1 A, Zona: Alto San Pedro y sus Oficinas Administrativas en la Avenida Mariscal Santa Cruz, Edificio: LA PRIMERA, Bloque: B, Piso: 6, Oficina: 8 La Empresa Constructora GUIBCAR INGENIEROS S.R.L. se encuentra predispuesta a proyectos que comprometan diferentes desafíos para así poder satisfacer las exigencias de cualquier entidad contratante, basados en el compromiso, entrega y responsabilidad hacia nuestro trabajo.</p>
				</aside>
			</article>
		</div>
	</section>`;
	document.getElementById('C2').innerHTML = TK;
}

function Proyectos() {
	let TK = `
	<section id="proyectos" class="py-5">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="section-title center">Nuestros Proyectos</h2>
                <p class="lead">Algunas de nuestras obras más destacadas</p>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="gallery-item" onclick="showProjectDetails('Edificio Corporativo Axis', 'Diseño y construcción de 12 pisos con áreas comunes y estacionamiento subterráneo. Este proyecto incluyó tecnología de punta en sistemas de seguridad y eficiencia energética.', 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')">
                        <img src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Edificio corporativo" class="gallery-img">
                        <div class="gallery-overlay">
                            <h4 class="gallery-title">Edificio Corporativo Axis</h4>
                            <p class="gallery-desc">Diseño y construcción de 12 pisos con áreas comunes y estacionamiento subterráneo.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="gallery-item" onclick="showProjectDetails('Centro Comercial Solaris', 'Construcción de complejo comercial con 120 locales y 5 salas de cine. El proyecto incluyó diseño de áreas comunes, estacionamiento para 500 vehículos y sistema de climatización central.', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')">
                        <img src="res/remodelacion.jpg" alt="Centro comercial" class="gallery-img">
                        <div class="gallery-overlay">
                            <h4 class="gallery-title">Remodelacion del estadion</h4>
                            <p class="gallery-desc">Construcción de complejo comercial.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="gallery-item" onclick="showProjectDetails('inmob1', 'Conjunto residencial de 80 viviendas con áreas verdes y zona deportiva. El proyecto incluyó infraestructura de servicios, diseño de paisajismo y áreas comunales de esparcimiento.', 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')">
                        <img src="res/inmob1.jpg" alt="Proyecto residencial" class="gallery-img">
                        <div class="gallery-overlay">
                            <h4 class="gallery-title">Edificio Las Lomas</h4>
                            <p class="gallery-desc">Conjunto residencial de 80 viviendas con áreas verdes y zona deportiva.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="gallery-item" onclick="showProjectDetails('Remodelacion de vivienda', 'Remodelacion de vivienda de longitud sobre el río San Antonio. Estructura de acero y concreto con diseño antisísmico y capacidad para soportar alto tráfico vehicular.', 'https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')">
                        <img src="res/mejviendas.jpg" alt="Puente" class="gallery-img">
                        <div class="gallery-overlay">
                            <h4 class="gallery-title">Puente La Concordia</h4>
                            <p class="gallery-desc">Remodelacion de vivienda.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="gallery-item" onclick="showProjectDetails('Oficinas Financieras Global', 'Remodelación y ampliación de sede bancaria con tecnología de punta. El proyecto incluyó instalación de sistemas de seguridad, redes de datos y diseño de interiores moderno.', 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')">
                        <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Oficinas" class="gallery-img">
                        <div class="gallery-overlay">
                            <h4 class="gallery-title">Oficinas Financieras Global</h4>
                            <p class="gallery-desc">Remodelación y ampliación de sede bancaria con tecnología de punta.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="gallery-item" onclick="showProjectDetails('Hotel Paradise Beach', 'Complejo hotelero de 5 estrellas con 150 habitaciones y centro de convenciones. Diseño arquitectónico tropical, piscinas, spa y restaurantes con vista al mar.', 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')">
                        <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Hotel" class="gallery-img">
                        <div class="gallery-overlay">
                            <h4 class="gallery-title">Hotel Paradise Beach</h4>
                            <p class="gallery-desc">Complejo hotelero de 5 estrellas con 150 habitaciones y centro de convenciones.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
	document.getElementById('C2').innerHTML = TK;
}


function servicios() {
	let TK = `
	<a class="navbar-brand fw-bold" href="#">
  		<span class="text-dark">SERVI</span><span class="text-secondary">CIOS</span>
	</a>
	<h6>CONSTRUCCION</h6>
	<p class='m-2'>Los servicios que la Empresa Constructora GUIBCAR INGENIEROS S.R.L. ofrece en la actualidad son:.</p>
	<p class='m-2'> Obras de infraestructura Obras industriales Residencias Refacción y ampliaciones de infraestructuras Demoliciones
	Mantenimiento en general
	Supervisión de Obras
	Obras de infraestructura
	Obras industriales
	Residencias
	Refacción y ampliaciones de infraestructuras
	Demoliciones
	Mantenimiento en general
	Supervisión de Obras</p>
	<p>diseño estructural: Control de calidad de materiales Diseño y control de mezclas de hormigón Topografía y medición de precisión</p>
		<ul class="nav nav-tabs">
          <li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#vision">Visión</a></li>
          <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#mision">Misión</a></li>
        </ul>
        <div class="tab-content my-3">
          <div class="tab-pane fade show active" id="vision"><p>Nuestra visión es lograr...</p></div>
          <div class="tab-pane fade" id="mision"><p>Nuestra misión es servir...</p></div>
        </div>

        <!-- Grupo de trabajo -->
        <h4>Trabajos Realizados</h4>
        <div class="row">
          <div class="col-3"><img class="card-img-top" src="res/obr.jpg"></div>
          <div class="col-3"><img class="card-img-top" src="res/tinglado.jpg"></div>
          <div class="col-3"><img class="card-img-top" src="res/ob.jpg"></div>
          <div class="col-3"><img class="card-img-top" src="res/mejviendas.jpg"></div>
        </div>
		<div class='row row-cols-1 row-cols-md-5 m-2'>
			<article class="card">
				<img class="card-img-top" src="res/construcunetas.jpg">
				<aside class="card-body">
					<h5 class="card-title">Mantenimiento de cunetas</h5>
					<p class="card-text">construcción de cunetas macro distritales avenida costanera zona las retamas y bajo seguecoma.</p>
				</aside>
			</article>
		</div>
	<div class="container mt-3">
  			<h2>lista de servicios</h2>
  		<table class="table">
    		<thead class="table-dark">
				<tr>
					<th>#</th>
					<th>Servicio</th>
					<th>Precio</th>
				</tr>
			<thead/>
			<tbody>
			    <tr><td>1</td><td>Diseño Web</td><td>$500</td></tr>
			    <tr><td>2</td><td>Mantenimiento</td><td>300</td></tr>
			</tbody>
  		</table>
	</div>`;
	document.getElementById('C2').innerHTML = TK;
}

function Productos()
{	let TK=`
	 <section id="registrarPersona" class="seccion">
    <h2>Registrar Persona</h2>
    <form id="formPersona" class="card p-4 shadow-sm">
      <div class="mb-3">
        <label class="form-label">Nombre</label>
        <input name="nombre" type="text" class="form-control" placeholder="Nombre">
      </div>
      <div class="mb-3">
        <label class="form-label">Apellido</label>
        <input name="apellido" type="text" class="form-control" placeholder="Apellido">
      </div>
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input name="email" type="email" class="form-control" placeholder="correo@ejemplo.com">
      </div>
      <button type="button" class="btn btn-primary" onclick="guardarPersona()">Guardar Persona</button>
    </form>
  </section>

  <!-- Registrar Producto -->
  <section id="registrarProducto" class="seccion">
    <h2>Registrar Producto</h2>
    <form id="formProducto" class="card p-4 shadow-sm">
      <div class="mb-3">
        <label class="form-label">Nombre del Producto</label>
        <input name="producto_nombre" type="text" class="form-control" placeholder="Nombre del producto">
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label">Categoría</label>
          <select name="producto_categoria" class="form-select">
            <option value="">Seleccionar...</option>
            <option value="materiales">Materiales</option>
            <option value="herramientas">Herramientas</option>
          </select>
        </div>
        <div class="col-md-3 mb-3">
          <label class="form-label">Cantidad</label>
          <input name="producto_cantidad" type="number" class="form-control" min="0">
        </div>
        <div class="col-md-3 mb-3">
          <label class="form-label">Precio</label>
          <input name="producto_precio" type="number" class="form-control" step="0.01" min="0">
        </div>
      </div>
      <button type="button" class="btn btn-success" onclick="guardarProducto()">Guardar Producto</button>
    </form>
  </section>

  <!-- Ver Productos (ejemplo tabla) -->
  <section id="verProductos" class="seccion">
    <h2>Ver Productos</h2>
    <div id="tablaProductos" class="card p-3 shadow-sm">
      <p class="text-muted">Aquí aparecerá la lista de productos guardados.</p>
      <table class="table table-striped" id="tableProd">
        <thead><tr><th>#</th><th>Producto</th><th>Categoría</th><th>Cant.</th><th>Precio</th></tr></thead>
        <tbody></tbody>
      </table>
    </div>
  </section>
	`;
	document.getElementById('C2').innerHTML=TK;
}



function contactos() {
	let TK = `
	<section id="contacto" class="py-5 bg-light">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="section-title center">Contáctenos</h2>
                <p class="lead">Estamos listos para hacer realidad su proyecto</p>
            </div>
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <div class="card shadow">
                        <div class="card-body p-5">
                            <form id="contactForm">
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label">Nombre completo *</label>
                                        <input type="text" class="form-control" required>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label">Empresa</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label">Email *</label>
                                        <input type="email" class="form-control" required>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label">Teléfono</label>
                                        <input type="tel" class="form-control">
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Servicio de interés</label>
                                    <select class="form-select">
                                        <option>Construcción de obras civiles</option>
                                        <option>Arquitectura empresarial</option>
                                        <option>Supervisión de proyectos</option>
                                        <option>Diseño arquitectónico</option>
                                        <option>Consultoría</option>
                                        <option>Otro</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Mensaje *</label>
                                    <textarea class="form-control" rows="5" required placeholder="Describa su proyecto..."></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary w-100 btn-lg">
                                    <i class="fas fa-paper-plane me-2"></i>Enviar Consulta
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
	<form action="https://formsubmit.co/edsr579@email.com" method="POST" class="container my-5 p-4 border rounded shadow bg-light">
		<h2 class="text-center mb-4">Contacto</h2>
		
		<div class="mb-3">
			<label for="name" class="form-label">Nombre</label>
			<input type="text" class="form-control" name="name" id="name" placeholder="Nombre">
		</div>
		<div class="mb-3">
			<label for="phone" class="form-label">Teléfono</label>
			<input type="tel" class="form-control" name="phone" id="phone" placeholder="Teléfono">
		</div>
		<div class="mb-3">
			<label for="Email" class="form-label">Email</label>
			<input type="email" class="form-control" name="Email" id="Email" placeholder="Email">
		</div>
		<div class="mb-3">
			<label for="message" class="form-label">Mensaje</label>
			<textarea class="form-control" name="message" id="message" rows="5" placeholder="Escribe tu mensaje aquí..."></textarea>
		</div>
		<div class="d-flex justify-content-between mb-3">
			<a href="#" class="text-decoration-none">Política de privacidad</a>
			<a href="#" class="text-decoration-none">Términos y condiciones</a>
		</div>
		<div class="text-center">
			<button type="submit" class="btn btn-primary px-4">Enviar</button>
		</div>
	</form>`;
	document.getElementById('C2').innerHTML = TK;
}

function login()
{	let TK=`
	<form  class='m-3'>
		<section id="login" class="seccion activo d-flex justify-content-center align-items-center vh-100">
        <div class="card p-4 login-card shadow">
            <div class="user-icon mb-3 text-center">
                <i class="bi bi-person-circle"></i>
            </div>
            <input type="text" id="user" class="form-control mb-2" placeholder="Usuario">
            <input type="password" id="pwd" class="form-control mb-2" placeholder="Contraseña">
            <div class="d-flex justify-content-between">
                <button class="btn btn-primary" onclick="iniciarSesion()">Inicio</button>
            </div>
            <a href="#" class="mt-3 text-center text-decoration-none">registro</a>
        </div>
    </section>
	</form>`;
	document.getElementById('C2').innerHTML=TK;
}