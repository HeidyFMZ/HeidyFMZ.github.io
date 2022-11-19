window.addEventListener("scroll",function(){
    var header=document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);

})
const form=document.getElementById('form');
const nombres= document.getElementsById('nombres');
form.addEventListener('submit',function(e){
e.preventDefault();
    const nombresValue=nombres.value;
    sessionStorage.setItem('myObject',JSON.stringify( [nombresValue]));

   // localStorage.setItem('nombres',nombresValue);

    window.location.href="indexM.html";
})