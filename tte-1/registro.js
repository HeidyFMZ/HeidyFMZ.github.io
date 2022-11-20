let animado=document.querySelector(".navbar");
let altura=document.querySelector(".titulo_ingreso");
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

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; 
let yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd
}
if (mm < 10) {
  mm = '0' + mm
}

today = yyyy+ '-' + mm + '-' +dd;

let minimum = today;

let search_date = document.getElementById("search_date");

let fecha_de_vencimiento=document.querySelector("#fecha_vencimiento");
fecha_de_vencimiento.min = minimum;


let nu=document.createElement("option");
  let tabla=document.querySelector("#transactionTable");
  let form=document.querySelector("#transactionForm");
  let nom=document.querySelector("#nombre");
  let can=document.querySelector("#cantidad");
  let lot=document.querySelector("#lote");
  let presen=document.querySelector("#presentacion");
  let vencimiento=document.querySelector("#fecha_vencimiento");
  let eliminar=document.querySelector(".eliminar");
  let form2=document.querySelector("#transactionForm2");
  let contenedor=document.querySelector(".fondo");
  let footer=document.querySelector(".caja2");
  let transactionFormData=new FormData(form);

  form.addEventListener("submit",function(event){
 event.preventDefault();
 if (nom.value==""||can.value==""||lot.value==""||presen.value==""||vencimiento.value==""){
  alert("LLENA LOS DATOS");
}
else{
  transactionFormData=new FormData(form);
let TransactionObj=convertFormDataToTransactionObj(transactionFormData);
saveTransactionObject(TransactionObj);
let transactionTableRef=tabla;
let newTransactionRowRef=transactionTableRef.insertRow(-1);
newTransactionRowRef.className="fil";
let newTypeCellRef=newTransactionRowRef.insertCell(0);
newTypeCellRef.className="nom1";
newTypeCellRef.textContent=TransactionObj["transactionName"];
newTypeCellRef.style.backgroundColor="yellow";
newTypeCellRef.style.color="#252850";
newTypeCellRef.style.fontFamily="verdana";
newTypeCellRef.style.fontSize="6px";
 newTypeCellRef=newTransactionRowRef.insertCell(1);
newTypeCellRef.className="cant1";
newTypeCellRef.textContent=TransactionObj["transactionAmount"];
newTypeCellRef.style.backgroundColor="yellow";
newTypeCellRef.style.color="#252850";
newTypeCellRef.style.fontFamily="verdana";
newTypeCellRef.style.fontSize="6px";
newTypeCellRef=newTransactionRowRef.insertCell(2);
newTypeCellRef.className="tipo";
newTypeCellRef.textContent=TransactionObj["transactionLote"];
newTypeCellRef.style.backgroundColor="yellow";
newTypeCellRef.style.color="#252850";
newTypeCellRef.style.fontFamily="verdana";
newTypeCellRef.style.fontSize="6px";
newTypeCellRef=newTransactionRowRef.insertCell(3);
newTypeCellRef.textContent=TransactionObj["transactionPresentacion"];
newTypeCellRef.style.backgroundColor="yellow";
newTypeCellRef.style.color="#252850";
newTypeCellRef.style.fontFamily="verdana";
newTypeCellRef.style.fontSize="6px";
newTypeCellRef=newTransactionRowRef.insertCell(4);
newTypeCellRef.className="venc";
newTypeCellRef.textContent=TransactionObj["transactionFecha_Vencimiento"];
newTypeCellRef.style.backgroundColor="yellow";
newTypeCellRef.style.color="#252850";
newTypeCellRef.style.fontFamily="verdana";
newTypeCellRef.style.fontSize="6px";
nom.value="";
can.value="";
lot.value="";
presen.value="";
vencimiento.value="";
alert("SE REGISTRO CON EXITO");
nFilas++;
}
})

function convertFormDataToTransactionObj(TransactionObj){
  let transactionName=transactionFormData.get("nombre");
  let transactionAmount=transactionFormData.get("cantidad");
  let transactionLote=transactionFormData.get("lote");
  let transactionPresentacion=transactionFormData.get("presentacion");
  let transactionFecha_Vencimiento=transactionFormData.get("fecha_vencimiento");
  return{
    "transactionName":transactionName,
    "transactionAmount":transactionAmount,
    "transactionLote":transactionLote,
    "transactionPresentacion":transactionPresentacion,
    "transactionFecha_Vencimiento":transactionFecha_Vencimiento
  }
  }

function saveTransactionObject(TransactionObj){
let myTransactionArray=JSON.parse(localStorage.getItem("transactionData")) || [];
myTransactionArray.push(TransactionObj);
let TransactionArrayJSON=JSON.stringify(myTransactionArray);
localStorage.setItem("transactionData", TransactionArrayJSON)
}

function eliminateTransactionObject(TransactionObj){
  let myTransactionArray=JSON.parse(localStorage.getItem("transactionData")) || [];
  myTransactionArray.pop(TransactionObj);
  let TransactionArrayJSON=JSON.stringify(myTransactionArray);
  localStorage.setItem("transactionData", TransactionArrayJSON)
  }


let nFilas = ("tabla tr").length;
eliminar.addEventListener("click",()=>{
  if(nFilas>8){
transactionTableRef=tabla;
newTransactionRowRef=transactionTableRef.deleteRow(-1);
nFilas--;
let TransactionObj=convertFormDataToTransactionObj(transactionFormData);
eliminateTransactionObject (TransactionObj);
}
else{
  alert("NO SE PUEDE ELIMINAR NINGUNA FILA");
}
})



document.addEventListener("DOMContentLoaded", function(event){
  event.preventDefault();
let TransactionObjArr=JSON.parse(localStorage.getItem("transactionData"));
TransactionObjArr.forEach(function(arrayElement){
let newTransactionRowRef=transactionTableRef.insertRow(-1);
newTransactionRowRef.className="fil";
let newTypeCellRef=newTransactionRowRef.insertCell(0);
newTypeCellRef.className="nom1";
newTypeCellRef.textContent=arrayElement["transactionName"];
newTypeCellRef.style.backgroundColor="yellow";
newTypeCellRef.style.color="#252850";
newTypeCellRef.style.fontFamily="verdana";
newTypeCellRef.style.fontSize="6px";
 newTypeCellRef=newTransactionRowRef.insertCell(1);
newTypeCellRef.className="cant1";
newTypeCellRef.textContent=arrayElement["transactionAmount"];
newTypeCellRef.style.backgroundColor="yellow";
newTypeCellRef.style.color="#252850";
newTypeCellRef.style.fontFamily="verdana";
newTypeCellRef.style.fontSize="6px";
newTypeCellRef=newTransactionRowRef.insertCell(2);
newTypeCellRef.className="tipo";
newTypeCellRef.textContent=arrayElement["transactionLote"];
newTypeCellRef.style.backgroundColor="yellow";
newTypeCellRef.style.color="#252850";
newTypeCellRef.style.fontFamily="verdana";
newTypeCellRef.style.fontSize="6px";
newTypeCellRef=newTransactionRowRef.insertCell(3);
newTypeCellRef.textContent=arrayElement["transactionPresentacion"];
newTypeCellRef.style.backgroundColor="yellow";
newTypeCellRef.style.color="#252850";
newTypeCellRef.style.fontFamily="verdana";
newTypeCellRef.style.fontSize="6px";
newTypeCellRef=newTransactionRowRef.insertCell(4);
newTypeCellRef.className="venc";
newTypeCellRef.textContent=arrayElement["transactionFecha_Vencimiento"];
newTypeCellRef.style.backgroundColor="yellow";
newTypeCellRef.style.color="#252850";
newTypeCellRef.style.fontFamily="verdana";
newTypeCellRef.style.fontSize="6px";
nom.value="";
can.value="";
lot.value="";
presen.value="";
vencimiento.value="";
nFilas++;
})
let obtener=document.querySelectorAll(".venc");
  for(let k=0;k<obtener.length;k++){
   let ulti=new Date(obtener[k].innerHTML);
   let di= ulti.getDate()+1;
   let me = ulti.getMonth()+1; 
   let ye = ulti.getFullYear();
   if (di < 10) {
    di = '0' + di
  }
  if (me < 10) {
    me = '0' + me
  }
  ulti= ye+"-"+me+"-"+di;
    if(minimum<=ulti){
      bandera=true;
    }
    if(minimum>ulti){
    bandera=true;
   obtener[k].style.backgroundColor="red";
   obtener[k].style.color="white";
  }
  }
});




let venta=document.querySelector(".venta");
let salida=document.querySelector("#transactionForm2");
let ingreso=document.querySelector("#transactionForm");
let boton_ingreso=document.querySelector(".ingreso");
let caja1=document.querySelector(".formulario");
let caja2=document.querySelector(".formulario2");
venta.addEventListener("click",()=>{
salida.style.visibility="visible";
ingreso.style.visibility="hidden";
caja1.style.visibility="hidden";
caja2.style.visibility="visible";
})

boton_ingreso.addEventListener("click",()=>{
salida.style.visibility="hidden";
ingreso.style.visibility="visible";
caja1.style.visibility="visible";
caja2.style.visibility="hidden";
})





let nom2=document.querySelector("#nombre2");
let can2=document.querySelector("#cantidad2");
let precio=document.querySelector("#precio");
let tabla2=document.querySelector("#transactionTable2");
let transactionFormData2=new FormData(form2);
form2.addEventListener("submit",function(event){
  event.preventDefault();
  if (nom2.value==""||can2.value==""||precio.value==""){
   alert("LLENA LOS DATOS");
 }
else{
  event.preventDefault();
  transactionFormData2=new FormData(form2);
  let TransactionObj2=convertFormDataToTransactionObj2(transactionFormData2);
  let nm0=document.querySelectorAll(".nom1");
  let transactionName4=document.querySelector("#nombre2");
  for(let t=0;t<nm0.length;t++){
    let no0=nm0[t].innerHTML;
    let no3=transactionName4.value;
    if(no0==no3){
  saveTransactionObject2(TransactionObj2);
  let transactionTableRef2=tabla2;
  let newTransactionRowRef2=transactionTableRef2.insertRow(-1);
  let newTypeCellRef2=newTransactionRowRef2.insertCell(0);
  newTypeCellRef2.className="nom2";
  newTypeCellRef2.textContent=TransactionObj2["transactionName2"];
  newTypeCellRef2.style.backgroundColor="orange";
  newTypeCellRef2.style.color="#252850";
  newTypeCellRef2.style.fontFamily="verdana";
  newTypeCellRef2.style.fontSize="11px";
  newTypeCellRef2=newTransactionRowRef2.insertCell(1);
  newTypeCellRef2.className="cant2";
  newTypeCellRef2.textContent=TransactionObj2["transactionAmount2"];
  newTypeCellRef2.style.backgroundColor="orange";
  newTypeCellRef2.style.color="#252850";
  newTypeCellRef2.style.fontFamily="verdana";
  newTypeCellRef2.style.fontSize="11px";
  newTypeCellRef2=newTransactionRowRef2.insertCell(2);
  newTypeCellRef2.textContent=TransactionObj2["transactionLote2"]*TransactionObj2["transactionAmount2"];
  newTypeCellRef2.style.backgroundColor="orange";
  newTypeCellRef2.style.color="#252850";
  newTypeCellRef2.style.fontFamily="verdana";
  newTypeCellRef2.style.fontSize="11px";
  newTypeCellRef2=newTransactionRowRef2.insertCell(3);
  newTypeCellRef2.textContent=TransactionObj2["transactionPresentacion2"];
  newTypeCellRef2.style.backgroundColor="orange";
  newTypeCellRef2.style.color="#252850";
  newTypeCellRef2.style.fontFamily="verdana";
  newTypeCellRef2.style.fontSize="11px";
  nom2.value="";
can2.value="";
precio.value="";
nFilas2++;
t++;
residuo();
}
}
}})

function convertFormDataToTransactionObj2(TransactionObj2){
  let transactionName2=transactionFormData2.get("nombre2");
  let transactionAmount2=transactionFormData2.get("cantidad2");
  let transactionLote2=transactionFormData2.get("precio");
  let transactionPresentacion2=today;
  return{
    "transactionName2":transactionName2,
    "transactionAmount2":transactionAmount2,
    "transactionLote2":transactionLote2,
    "transactionPresentacion2":transactionPresentacion2,
  }
  }




  function saveTransactionObject2(TransactionObj2){
    let myTransactionArray2=JSON.parse(localStorage.getItem("transactionData2")) || [];
    myTransactionArray2.push(TransactionObj2);
    let TransactionArrayJSON2=JSON.stringify(myTransactionArray2);
    localStorage.setItem("transactionData2", TransactionArrayJSON2)
    }

    function eliminateTransactionObject2(TransactionObj2){
      let myTransactionArray2=JSON.parse(localStorage.getItem("transactionData2")) || [];
      myTransactionArray2.pop(TransactionObj2);
      let TransactionArrayJSON2=JSON.stringify(myTransactionArray2);
      localStorage.setItem("transactionData2", TransactionArrayJSON2)
      }
      

 let eliminar2=document.querySelector(".eliminar2");
 let nFilas2 = ("tabla2 tr").length;
 eliminar2.addEventListener("click",()=>{
  let nm2=document.querySelectorAll(".nom2");
  let nm1=document.querySelectorAll(".nom1");
  let cant1=document.querySelectorAll(".cant1");
  let cant2=document.querySelectorAll(".cant2");
  if(nFilas2>9){
 let transactionTableRef2=tabla2;
 newTransactionRowRef2=transactionTableRef2.deleteRow(-1);
 nFilas2--;
 let TransactionObj2=convertFormDataToTransactionObj2(transactionFormData2);
 eliminateTransactionObject2 (TransactionObj2);
 }
 else{
   alert("NO SE PUEDE ELIMINAR NINGUNA FILA");
 }
 for(let t=0;t<nm1.length;t++){
   let no1=nm1[t].innerHTML;
   console.log(no1);
   let no2=nm2[nm2.length-1].innerHTML;
   console.log(no2);
   let ca1=parseInt(cant1[t].innerHTML);
   console.log(ca1);
   let ca2=parseInt(cant2[nm2.length-1].innerHTML);
   console.log(ca2);
   if(no1===no2){
 cant1[t].innerHTML=ca1+ca2;
 break;
   } 
 }
 }
 )

 let control=document.querySelector(".control");
 let bandera=false;
 let transactionTableRef=tabla;
 control.addEventListener("click",()=>{
  let obtener=document.querySelectorAll(".venc");
  for(let k=0;k<obtener.length;k++){
   let ult=new Date(obtener[k].innerHTML);
   let d=ult.getDate()+1;
   let m=ult.getMonth()+1; 
   let y=ult.getFullYear();
   if (d < 10) {
    d = '0' + d
  }
  if (m< 10) {
    m = '0' + m
  }
   ult= y+"-"+m+"-"+d;
   
    if(minimum<=ult){
      bandera=true;
    }
    if(minimum>ult){
    bandera=true;
   obtener[k].style.backgroundColor="red";
   obtener[k].style.color="white";
  }
  }
  if(bandera==true){
    alert("CONTROL REALIZADO");
  }
})

function residuo (){
let nm2=document.querySelectorAll(".nom2");
let nm1=document.querySelectorAll(".nom1");
let cant1=document.querySelectorAll(".cant1");
let cant2=document.querySelectorAll(".cant2");
for(let t=0;t<nm1.length;t++){
  let no1=nm1[t].innerHTML;
  let no2=nm2[nm2.length-1].innerHTML;
  let ca1=parseInt(cant1[t].innerHTML);
  let ca2=parseInt(cant2[nm2.length-1].innerHTML);
  if(no1===no2){
cant1[t].innerHTML=ca1-ca2;
if(parseInt(cant1[t].innerHTML)==0){
  alert("SE REGISTRO CON EXITO");
  alert("SE AGOTO EL MEDICAMENTO");
  let transactionTableRef5=tabla;
  newTransactionRowRef=transactionTableRef5.deleteRow(t+1);
let myTransactionArray=JSON.parse(localStorage.getItem("transactionData")) || [];
myTransactionArray.splice(t,1);
let TransactionArrayJSON=JSON.stringify(myTransactionArray);
localStorage.setItem("transactionData", TransactionArrayJSON)
nFilas--;
      }
      if(parseInt(cant1[t].innerHTML)>0){
        alert("SE REGISTRO CON EXITO");
            }
      if(parseInt(cant1[t].innerHTML)<0){
alert("LA CANTIDAD VENDIDA DE MEDICAMENTOS NO PUEDE SUPERAR A LA REGISTRADA");
cant1[t].innerHTML=ca1;
let transactionTableRef6=tabla2;
newTransactionRowRef2=transactionTableRef6.deleteRow(-1);
let myTransactionArray2=JSON.parse(localStorage.getItem("transactionData2")) || [];
myTransactionArray2.splice(t-1,1);
let TransactionArrayJSON2=JSON.stringify(myTransactionArray2);
localStorage.setItem("transactionData2", TransactionArrayJSON2);
nFilas2--;
      }
  }
}
};

let numero=document.querySelector(".boton2");
numero.addEventListener("click",()=>{
alert("CONTACTANOS AL:  +591 79392032");
})


document.addEventListener("DOMContentLoaded", function(event2){
  event2.preventDefault();
  let transactionTableRef2=tabla2;
let TransactionObjArr2=JSON.parse(localStorage.getItem("transactionData2"));
TransactionObjArr2.forEach(function(arrayElement2){
let newTransactionRowRef2=transactionTableRef2.insertRow(-1);
let newTypeCellRef2=newTransactionRowRef2.insertCell(0);
newTypeCellRef2.className="nom2";
newTypeCellRef2.textContent=arrayElement2["transactionName2"];
newTypeCellRef2.style.backgroundColor="orange";
newTypeCellRef2.style.color="#252850";
newTypeCellRef2.style.fontFamily="verdana";
newTypeCellRef2.style.fontSize="11px";
 newTypeCellRef2=newTransactionRowRef2.insertCell(1);
newTypeCellRef2.className="cant2";
newTypeCellRef2.textContent=arrayElement2["transactionAmount2"];
newTypeCellRef2.style.backgroundColor="orange";
newTypeCellRef2.style.color="#252850";
newTypeCellRef2.style.fontFamily="verdana";
newTypeCellRef2.style.fontSize="11px";
newTypeCellRef2=newTransactionRowRef2.insertCell(2);
newTypeCellRef2.textContent=arrayElement2["transactionLote2"]*arrayElement2["transactionAmount2"];
newTypeCellRef2.style.backgroundColor="orange";
newTypeCellRef2.style.color="#252850";
newTypeCellRef2.style.fontFamily="verdana";
newTypeCellRef2.style.fontSize="11px";
newTypeCellRef2=newTransactionRowRef2.insertCell(3);
newTypeCellRef2.textContent=arrayElement2["transactionPresentacion2"];
newTypeCellRef2.style.backgroundColor="orange";
newTypeCellRef2.style.color="#252850";
newTypeCellRef2.style.fontFamily="verdana";
newTypeCellRef2.style.fontSize="11px";
nom2.value="";
can2.value="";
precio.value="";
nFilas2++;
})});


let  busqueda_analgesicos=document.querySelector(".busqueda_analgesicos");
busqueda_analgesicos.addEventListener("click",function(event4){
  event4.preventDefault();
  let obtener_analgesicos=document.querySelectorAll(".tipo");
  let fil=document.querySelectorAll(".fil");
  let g="ANALGESICO";
  for(let s=0;s<obtener_analgesicos.length;s++){
    fil[s].style.display="table-row";
   if(g!=(obtener_analgesicos[s].innerHTML)){
    fil[s].style.display="none";
   }
}
});

let  busqueda_antiacidos=document.querySelector(".busqueda_antiacidos");
busqueda_antiacidos.addEventListener("click",function(event4){
  event4.preventDefault();
  let obtener_antiacidos=document.querySelectorAll(".tipo");
  let fil=document.querySelectorAll(".fil");
  let g="ANTIACIDO Y ANTIULCEROSO";
  for(let s=0;s<obtener_antiacidos.length;s++){
    fil[s].style.display="table-row";
   if(g!=(obtener_antiacidos[s].innerHTML)){
    fil[s].style.display="none";
   }
}
});

let  busqueda_antialergicos=document.querySelector(".busqueda_antialergicos");
busqueda_antialergicos.addEventListener("click",function(event4){
  event4.preventDefault();
  let obtener_antialergicos=document.querySelectorAll(".tipo");
  let fil=document.querySelectorAll(".fil");
  let g="ANTIALERGICO";
  for(let s=0;s<obtener_antialergicos.length;s++){
    fil[s].style.display="table-row";
   if(g!=(obtener_antialergicos[s].innerHTML)){
    fil[s].style.display="none";
   }
}
});

let  busqueda_antidiarreico=document.querySelector(".busqueda_antidiarreico");
busqueda_antidiarreico.addEventListener("click",function(event4){
  event4.preventDefault();
  let obtener_antidiarreico=document.querySelectorAll(".tipo");
  let fil=document.querySelectorAll(".fil");
  let g="ANTIDIARREICO Y LAXANTE";
  for(let s=0;s<obtener_antidiarreico.length;s++){
    fil[s].style.display="table-row";
   if(g!=(obtener_antidiarreico[s].innerHTML)){
    fil[s].style.display="none";
   }
}
});

let busqueda_antiinfeccioso=document.querySelector(".busqueda_antiinfeccioso");
busqueda_antiinfeccioso.addEventListener("click",function(event4){
  event4.preventDefault();
  let obtener_antiinfeccioso=document.querySelectorAll(".tipo");
  let fil=document.querySelectorAll(".fil");
  let g="ANTIINFECCIOSO";
  for(let s=0;s<obtener_antiinfeccioso.length;s++){
    fil[s].style.display="table-row";
   if(g!=(obtener_antiinfeccioso[s].innerHTML)){
    fil[s].style.display="none";
   }
}
});

let busqueda_antiinflamatorio=document.querySelector(".busqueda_antiinflamatorio");
busqueda_antiinflamatorio.addEventListener("click",function(event4){
  event4.preventDefault();
  let obtener_antiinflamatorio=document.querySelectorAll(".tipo");
  let fil=document.querySelectorAll(".fil");
  let g="ANTIINFLAMATORIO";
  for(let s=0;s<obtener_antiinflamatorio.length;s++){
    fil[s].style.display="table-row";
   if(g!=(obtener_antiinflamatorio[s].innerHTML)){
    fil[s].style.display="none";
   }
}
});

let busqueda_antipiretico=document.querySelector(".busqueda_antipiretico");
busqueda_antipiretico.addEventListener("click",function(event4){
  event4.preventDefault();
  let obtener_antipiretico=document.querySelectorAll(".tipo");
  let fil=document.querySelectorAll(".fil");
  let g="ANTIPIRETICO";
  for(let s=0;s<obtener_antipiretico.length;s++){
    fil[s].style.display="table-row";
   if(g!=(obtener_antipiretico[s].innerHTML)){
    fil[s].style.display="none";
   }
}
});

let busqueda_antitusivo=document.querySelector(".busqueda_antitusivo");
busqueda_antitusivo.addEventListener("click",function(event4){
  event4.preventDefault();
  let obtener_antitusivo=document.querySelectorAll(".tipo");
  let fil=document.querySelectorAll(".fil");
  let g="ANTITUSIVO Y MUCOLITICO";
  for(let s=0;s<obtener_antitusivo.length;s++){
    fil[s].style.display="table-row";
   if(g!=(obtener_antitusivo[s].innerHTML)){
    fil[s].style.display="none";
   }
}
});

let busqueda_todos=document.querySelector(".busqueda_todos");
busqueda_todos.addEventListener("click",function(event4){
  event4.preventDefault();
  let obtener_todos=document.querySelectorAll(".tipo");
  let fil=document.querySelectorAll(".fil");
  for(let s=0;s<obtener_todos.length;s++){
    fil[s].style.display="table-row";
}
});


