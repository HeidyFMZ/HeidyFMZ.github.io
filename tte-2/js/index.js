/*alert("🍰🍩¡Bienvenido o Bienvenida al sitio web de Dencker Pan Cochabamba¡🍪🎂")*/
window.addEventListener("scroll",function(){
    var header=document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);

})
