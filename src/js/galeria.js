document.addEventListener('DOMContentLoaded',function(){
    crearGaleria();
});

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');
    for(let i = 1; i <= 12; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;
        // add show imagen function
        imagen.onclick = mostrarImagen;

        const lista = document.createElement("LI");
        lista.appendChild(imagen);
        galeria.appendChild(lista);
    }
}

function mostrarImagen(e){
    const id = parseInt(e.target.dataset.imagenId);
    //Generar imagen
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;
    console.log(imagen);
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    // CLICK cierra la imagen
    overlay.onclick = function(){
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    //Boton para cerrar la imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    // CLICK en la X cierra imagen
    cerrarImagen.onclick = function(){
        overlay.remove();
        body.classList.remove('fijar-body');
    }
    overlay.appendChild(cerrarImagen);

    //Mostrar HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}