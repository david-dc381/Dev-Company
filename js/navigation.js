(function () {
    
    // propiedades para el scroll
    let propiedadScroll = {
        posicion: window.pageYOffset, //obtenemos la altura que recorremos con el scroll
        scroll_suave: document.getElementsByClassName('scroll-suave'), //obtenemos el nombre de la clase
        volver_arriba: document.getElementsByClassName('volver-arriba'), //obtenemos la clase del home
        destino: null, //a la sección donde vamos
        seccion_distancia: null, // la distancia del elemento al que queremos ir
        intervalo: null //el tiempo en que se va a recorrer la distancia
    }

    // métodos para el scroll
    let metodoScroll = {
        inicio: function() {
            // recorremos los elementos de lso enlaces del nav
            for (let i = 0; i < propiedadScroll.scroll_suave.length; i++) {
                propiedadScroll.scroll_suave[i].addEventListener('click', metodoScroll.moverse);
            }

            for (let i = 0; i < propiedadScroll.volver_arriba.length; i++) {
                propiedadScroll.volver_arriba[i].addEventListener('click', metodoScroll.subir)
            }
        },

        // metodo para moverse por el documento
        moverse: function(e) {
            e.preventDefault();

            // limpiamos el intervalo para que no choquen los intervalos entre si
            clearInterval(propiedadScroll.intervalo);

            // obtenemos el valor del atributo href y lo guardamos en la propiedad 'destino'
            propiedadScroll.destino = this.getAttribute('href');

            // reducimos el la altura en px para que no nos tape el título del menu
            propiedadScroll.seccion_distancia = document.querySelector(propiedadScroll.destino).offsetTop - 76;
        
            // Ponemos un intervalo para la bajada del scroll
            propiedadScroll.intervalo = setInterval( function() {
                
                if ( propiedadScroll.posicion < propiedadScroll.seccion_distancia ) {
                    propiedadScroll.posicion += 30;

                    // limpiamos el intervalo anterior, para que cada vez que avanze sea un nuevo intervalo
                    if ( propiedadScroll.posicion >= propiedadScroll.seccion_distancia ) {
                        clearInterval(propiedadScroll.intervalo);
                    }

                } else {
                    propiedadScroll.posicion -= 30;

                    // limpiamos el intervalo anterior, para que cada vez que retroceda sea un nuevo intervalo
                    if ( propiedadScroll.posicion <= propiedadScroll.seccion_distancia ) {
                        clearInterval(propiedadScroll.intervalo);
                    }
                }
                
                // vamos recorriendo la altura en Y del documento, según lo que vamos recorriendo con el scroll 
                // es importante ponerlo, porque usamos la propiedad scroll, la que se desliza por el documento
                window.scroll(0, propiedadScroll.posicion);

            }, 15); //el intervalo recorrera el documento de 30px en 30px cada 15 milisegundos
        },

        // método para subir al home
        subir: function(e) {
            e.preventDefault();
            clearInterval(propiedadScroll.intervalo);

            // obtenemos el la posición donde se encuaentra el scroll
            propiedadScroll.posicion = window.pageYOffset;

            // creamos un intervalo para subir
            propiedadScroll.intervalo = setInterval( function() {

                if (propiedadScroll.posicion > 0 ) {
                    propiedadScroll.posicion -= 30;

                    if ( propiedadScroll.posicion <= 0 ) {
                        clearInterval(propiedadScroll.intervalo)
                    
                    }
                } else {
                    return;
                }
                
                 // vamos recorriendo la altura en Y del documento, según lo que vamos recorriendo con el scroll 
                // es importante ponerlo, porque usamos la propiedad scroll, la que se desliza por el documento
                window.scroll(0, propiedadScroll.posicion);
            }, 15);
        }
    }

    metodoScroll.inicio();    
}());