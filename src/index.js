import router from './routes/'; //importo las rutas generales

window.addEventListener('load', router); //Escucho un evento, el evento load se dispara cuando un recurso y sus recursos dependientes han terminado de cargar.
window.addEventListener('hashchange', router); //Escucho otro evento, El evento hashchange es ejecutado cuando el fragmento identificador de la URL ha cambiado (la parte de la URL que continúa despues del simbolo #, incluyendo el símbolo #).
