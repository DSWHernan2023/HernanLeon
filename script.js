let correctas =[1,3,4,2,4];
let opcion_elegida=[];
let cantidad_correctas=0;
 function respuesta(num_pregunta, seleccionada){
opcion_elegida[num_pregunta] = seleccionada.value

id="p" + num_pregunta;
labels=document.getElementById(id).childNodes
labels[3].style.backgroundColor = "white";
labels[5].style.backgroundColor = "white";
labels[7].style.backgroundColor = "white";

seleccionada.parentNode.style.backgroundColor= "#cec0fc";
 }

 function enviar(){

cantidad_correctas = 0;
for (i=0; i< correctas.length; i++){
    if (correctas[i]== opcion_elegida[i]){
        cantidad_correctas++;
    }
} 

document.getElementById("resultado").innerHTML = cantidad_correctas;


 }