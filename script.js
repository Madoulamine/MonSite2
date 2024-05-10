// SCROLL ANIMATION========
ScrollReveal().reveal('home__data', 
'home__social','home__img','.home__social-icon',{interval: 10000},
{ delay: 70 });

// var sr = scrollreveal({
//     origin:'top',
//     distance: '80px',
//     duration: 10000,
//     reset: true
// });

// =====SCROLL HOME===
// sr.reveal('',{
// })
// sr.reveal('',{
//     delay: 500
// })
// sr.reveal('',{
//     delay: 500
// })
// sr.reveal('',{interval: 500});
// // SCROLL ABOUT
// sr.reveal('.about__img',{})
// sr.reveal('.about__subtitle',{
//     delay:500,
// })
// sr.reveal('.about__text',{
//     delay:500
// })

// // =====SCROLL SKILLS
// sr.reveal('.skills__subtitle',{
// })
// sr.reveal('.skills__text',{
//     delay:200
// })
// sr.reveal('.skills__data',{
//     interval:200
// })
// sr.reveal('.skills__img',{
//     delay:400
// })

// // SCROLL WORK
// sr.reveal('.work__img',{
//     interval:200
// })

// // === SCROLL CONTACT
// sr.reveal('.contact__input',{interval:200})


// MENU
const showMenu= (toggleId, navId)=>{
    const toggle= document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// Active et REmove
const navLink = document.querySelectorAll('.nav__link');
function linkAction(){
    // Activer le link
    navLink.forEach( n=> n.classList.remove('active'))
    this.classList.add('active')
    // Remove le menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach( n => n.addEventListener('click', linkAction));

const aprecie=document.getElementById('apprecie')
aprecie.addEventListener('click', function(){
    window.location.href='index1.html';
});



