const hamburger = document.querySelector('.hamburger');
const navbar= document.querySelector('ul');

hamburger.addEventListener('click',()=>{
    // alert("hello");
    navbar.classList.toggle('slide');
});
