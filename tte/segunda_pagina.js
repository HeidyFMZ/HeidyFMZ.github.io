let animado=document.querySelector(".navbar");
let altura=document.querySelector(".slider");
function mostrarScroll(){
let scrolltop=document.documentElement.scrollTop;
let alturaAnimado=altura.offsetTop;
if(alturaAnimado+150<scrolltop){
animado.style.opacity="0";
animado.style.top="-80px";
}
else{
  animado.style.opacity="1";
animado.style.top="0px";
}
}

window.addEventListener("scroll",mostrarScroll);

  let numero=document.querySelector(".boton2");
numero.addEventListener("click",()=>{
alert("CONTACTANOS AL:  +591 79392032");
})
