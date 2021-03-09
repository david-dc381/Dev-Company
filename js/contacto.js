(function(){

    let propForm = {
        // accedemos al name de formulario de manera directa
        formulario: document.formulario_contacto,
        // accedemos de manera directa a los elementos del formulario
        elementos: document.formulario_contacto.elements,
        //almacenamos la etiqueta 'p', del mjs de error de llenado de formulario
        error: null,
        // texto que tendra la etiqueta 'p'
        textoError: null,
    }

    let metoForm = {
        inicio: function() {
            // recorremos los elementos del form
            for (let i = 0; i < propForm.elementos.length; i++) {
                
                /* hacemos un recorrido de los elementos y creamos un focus y un blur
                para los elementos cuando se seleccionen y cuando no. A textarea le 
                cambiamos la comparación a minúscula ya que por defecto nos la hace 
                en mayúscula y por eso la cambiamos a minúscula.  */

                if ( propForm.elementos[i].type == 'text' || propForm.elementos[i].type == 'email'
                    || propForm.elementos[i].nodeName.toLowerCase() == 'textarea' ) {
                        
                        propForm.elementos[i].addEventListener('focus', metoForm.focusInput);
                        propForm.elementos[i].addEventListener('blur', metoForm.blurInput);
                }
            }
            // creamos un evento para el 'submit' del formulario, verificando si los campos fueron llenados
            propForm.formulario.addEventListener('submit', metoForm.validarInputs);

        },

        focusInput: function() {
            /* accedemos al padre del input que demos click y a la posición 1 es a la que vamos a acceder
            y a darle una clase extra que es el active */
            this.parentElement.children[1].className = "label active";
        },


        blurInput: function() {
            /* verificamos si el input en el que hicimos focus tiene algo escrito le quitamos la clase active */
            if ( this.value == "" ) {
                this.parentElement.children[1].className = "label";
            }
        },

        validarInputs: function(e) {

            // hacemos un recorrido de los inputs
            for (let i = 0; i < propForm.elementos.length; i++) {
                
                // verificamos si los inputs están vacios
                if ( propForm.elementos[i].value == "" ) {
                    // si esta vacio detenemos el evento submit del formulario.
                    e.preventDefault();

                    /* 
                        Accedemos al padre de los elementos que es 'campos', y luego
                        averiguamos la cantidad de hijos que tiene con (children) y
                        (lenght).
                        Verificamos si la cantidad de elementos llenados es menor a 3
                    */
                    if ( propForm.elementos[i].parentElement.children.length < 3 ) {
                        // creamos un elemento 'p'
                        propForm.error = document.createElement('p');

                        /* 
                        Creamos un texto para el 'p', al cual también le concatenamos con el 'name' de
                        cada respectivo input, esto es también gracias al recorrer el for.
                        */
                        propForm.textoError = document.createTextNode('Porfavor llena el campo con tu ' + propForm.elementos[i].name);
                        propForm.error.appendChild(propForm.textoError);
                        propForm.error.className = 'error'; // damos una clase 'error' al nuevo párrafo
                    
                        /* 
                            Accedemos al padre 'campos', y ahí le agragamos el nuevo párrafo
                            que creamos y por defecto lo agrega al final de los elementos
                        */
                       propForm.elementos[i].parentElement.appendChild(propForm.error);
                    
                    }
                }
                
                else {
                    /* sino, accedemos al padre y vemos si la cantidad de hijos
                    son mayores o igual a 3, porque con los parrafos aumenta la 
                    cantidad de hijos. */

                    if ( propForm.elementos[i].parentElement.children.length >= 3 ) {
                        
                        /* 
                        Seleccionamos todas las etiquetas 'p', por sus etiquetas, mediante el for
                        y todo eso lo guardamos en la propiedad 'error'.
                        */
                        propForm.error = propForm.elementos[i].parentElement.getElementsByTagName('p')[0];
                        
                        /* 
                        Eliminamos las etiquetas 'p' de su padre contenedor, las cuales estan 
                        guardadas en la propiedad 'error', y según sea la cantidad de 'p' que haya
                        que son máximo hasta 3 se eliminarán, esto de la cantidad que haya es 
                        gracias al for que recorre para ver cuantas 'p' hay.
                        */
                        propForm.elementos[i].parentElement.removeChild(propForm.error);
                    }
                }
            }
        },
    }

    metoForm.inicio();
}());