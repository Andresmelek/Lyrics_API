import { API } from './api.js';
import * as UI from './interfaz.js';

UI.formularioBuscar.addEventListener('submit', (e) => {
    e.preventDefault();
    const artista = document.getElementById('artista').value,
        cancion = document.getElementById('cancion').value;

        if (artista === "" || cancion === "") {
            //campos vacios mostrar error
            UI.divMensajes.innerHTML = "Error: Ambos campos son obligatorios";
            UI.divMensajes.classList.add('error');
            setTimeout( () => {
                UI.divMensajes.innerHTML = "";
                UI.divMensajes.classList.remove('error');
            }, 3000);
        } else {
            //El formulario está vacií realizar consulta a la API

            const api = new API(artista, cancion);
            api.consultarApi()
            .then(data => {
                if (data.response.lyrics){
                    // la canción existe
                    const letra = data.response.lyrics;
                    UI.divResultado.innerHTML = letra;
                } else {
                    // la canción no existe
                    
                    UI.divMensajes.innerHTML = "La canción no existe prueba con otra búsqueda";
                    UI.divMensajes.classList.add('error');
                    setTimeout( () => {
                        UI.divMensajes.innerHTML = "";
                        UI.divMensajes.classList.remove('error');
                        UI.formularioBuscar.reset();
                    }, 3000);
                }
            });
        }
        
});