const closeMenu = document.getElementById('close-menu');
const menuToggleButton = document.querySelector('.mobile-menu-icon button');
const menuLinks = document.querySelectorAll('.mobile-menu .nav-link');

function menuShow (){
    let menumobile = document.querySelector('.mobile-menu');

    if (menumobile.classList.contains('open')){
        menumobile.classList.remove('open')
    } else {
        menumobile.classList.add('open')
    }

    closeMenu.addEventListener('click', function() {
        menumobile.classList.remove('open');
      });
}

menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.mobile-menu').classList.remove('open');
    });
});

