(function() {
    
    // Propiedades Slider
    let propSlider = {
        slider: document.getElementById('slider'),
        primerSlider: null,
    }

    // Métodos Slider
    let metSlider = {
        inicio: function() {
            // la img cambia cada 3  segundos en un ciclo
            setInterval(metSlider.moverSlider, 3000);
        },

        moverSlider: function() {
            // creamosuna transición
            propSlider.slider.style.transition = 'all 1s ease';

            // recorremos la 1ra img con -100%, para que se muestre la siguiente img
            propSlider.slider.style.marginLeft = '-100%';

            // solo una vez se repetirá cada img en cada ciclo que se ejecute
            setTimeout(function() {
                // asignamos a 'primerSlider' el valor de la 1ra img
                propSlider.primerSlider = propSlider.slider.firstElementChild;

                // aquí hacemos que la 1ra img, se vuelva la ultima y la 2da img sea 1ra y la 3ra img sea 2da
                propSlider.slider.appendChild(propSlider.primerSlider);


                /* le quitamos la transición en el cambio de img porque si no,
                 nos muestra la img con el efecto de ir y volver
                 Esto se repetira en un ciclo, cada vez que la img cambia
                */
                propSlider.slider.style.transition = 'unset';

                // cambiamos el margin a cero para que nos muestre la img que siguiente, se repite en un ciclo
                propSlider.slider.style.marginLeft = 0;

            }, 1000);
        }
    }
metSlider.inicio();
}());