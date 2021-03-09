(function() {

    window.addEventListener('scroll', function() {

        let posicion = window.pageYOffset;
        let menu = document.getElementById("info-work");
        let altura = menu.offsetTop;
        let menu_pc = document.getElementById("menu-pc");
        let menu_mobile = document.getElementById("menu-mobile");
        
        if ( posicion > (altura - 40) ) {
            // pc
            menu_pc.style.backgroundColor = 'rgba(41, 56, 72, 0.90)';
            menu_pc.style.transition = 'all .4s ease';
            
            // mobile
            menu_mobile.style.backgroundColor = 'rgba(41, 56, 72, 0.90)';
            menu_mobile.style.transition = 'all .4s ease';
       
        } else {
            // pc;
            menu_pc.style.backgroundColor = 'transparent';
            menu_pc.style.transition = 'all .4s ease';
            
             // mobile
             menu_mobile.style.backgroundColor = 'transparent';
             menu_mobile.style.transition = 'all .4s ease';
        }
    });

    
}());