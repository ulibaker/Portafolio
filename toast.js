const contenedorLinks = document.getElementById('toast-footer');
const contenedorToast = document.getElementById('contenedor-toast');

contenedorLinks.addEventListener('click', (e) => {
	/* console.log(e.target.dataset.tipo); */
	const esElCorreo = e.target.dataset.tipo;
	
	if(esElCorreo === 'sies'){
	    e.preventDefault();
		/* console.log('agregando toast') */
		agregarToast();	
	}
});

contenedorToast.addEventListener('click', (e) => {
	/* console.log('click en el toast'); */
	const toastId = e.target.closest('div.toast').id;
	if(e.target.closest('button.btn-cerrar')) {
		/* console.log('click en cerrar toast'); */
		cerrarToast(toastId);
	}
});

const cerrarToast = (id) => {
	document.getElementById(id)?.classList.add('cerrando');
	/* console.log('toast cerrado'); */
};	

const agregarToast = () => {
	const nuevoToast = document.createElement('div');
	
	const toast = `
		<div class="toast autocierre" id="1">
			<div class="contenido-toast">
				<div class="icono-toast">
					<span class="fa-solid fa-circle-exclamation"></span>
				</div>
				<div class="texto-toast">
					<p> Email copied! </p>
				</div>
				<button class="btn-cerrar"><p>x</p></button>
			</div>
		</div>
	`

		nuevoToast.innerHTML = toast;

		contenedorToast.appendChild(nuevoToast);
		/* console.log('toast creado con éxito'); */
		
		const handleAnimacionCierre = (e) => {
			if(e.animationName === 'cierre') {
				nuevoToast.removeEventListener('animationend', handleAnimacionCierre);
				nuevoToast.remove();
			}
		};
		
		nuevoToast.addEventListener('animationend', handleAnimacionCierre);
		
		setTimeout(() => cerrarToast(1), 4900);
		setTimeout(() => cerrarToast(1), 4920);
		setTimeout(() => cerrarToast(1), 4940);
		setTimeout(() => cerrarToast(1), 4960);
		setTimeout(() => cerrarToast(1), 4980);
		setTimeout(() => cerrarToast(1), 5000);
};