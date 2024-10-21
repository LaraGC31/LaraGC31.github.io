
    document.addEventListener('DOMContentLoaded', () =>{
        let menu = document.querySelector('.menu-toggle');
        let nav = document.querySelector('.nav-menu');

        menu.addEventListener("click", ()=>{
           nav.classList.toggle('active');
        });
    })
