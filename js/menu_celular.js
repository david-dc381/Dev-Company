(function() {

    let propiedadMenu = {

        icono: document.getElementById('icono-menu'),
        slideMenu: document.getElementById('slide-menu'),
        enlaces: document.querySelectorAll('#slide-menu .enlaces a'),
        menu_activo: false,
    }


    let metodoMenu = {
        // función de inicio
        inicio: function() {
            // para deslizar el menú movil
            propiedadMenu.icono.addEventListener('click', metodoMenu.desplegarMenu);
            
            for (let i = 0; i < propiedadMenu.enlaces.length; i++) {
                propiedadMenu.enlaces[i].addEventListener('click', metodoMenu.ocultarMenu);
                
            }
        },

        // función para desplegar el menu
        desplegarMenu: function() {
            // vemos si el menu está activo
            if ( propiedadMenu.menu_activo == false ) {
                propiedadMenu.menu_activo = true; // cambiamos a true, si es false

                // añadimos a la clase que hay tiene el active, cuando se de click en el icono
                propiedadMenu.slideMenu.className = propiedadMenu.slideMenu.className + ' active';
            
            } else {
                // si no es true, cambiamos a  false
                propiedadMenu.menu_activo = false;
                // a las clases que ya existen, remplazamos solo a la de active por uno vacio, y así quitamos el menu
                propiedadMenu.slideMenu.className = propiedadMenu.slideMenu.className.replace('active', '');
            }
        },

        // para cuando hagamos click en un enlace se nos oculte el menu
        ocultarMenu: function() {
            // cambiamos el valor de la propiedad
            propiedadMenu.menu_activo = false;
            // y reemplazamos el nombre de la clase
            propiedadMenu.slideMenu.className = propiedadMenu.slideMenu.className.replace('active', '');
        }
    }

    metodoMenu.inicio();

}());