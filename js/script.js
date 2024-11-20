const btnReestablecer=document.getElementById('btnReestablecer');
const contadorVisitas=document.getElementById('contadorVisitas');

//Restablecer el contador
btnReestablecer.addEventListener('click',function(){
    localStorage.setItem('contador',0);
    mostrarContador();
})

//Contador de visitas
function guardarVisitas (){
      
    if (isNaN(localStorage.getItem('contador'))){
        localStorage.setItem('contador',0)
       
    }else{
        let contador =parseFloat(localStorage.getItem('contador'));
        contador += 1;
        localStorage.setItem('contador',contador);
        
    }
    mostrarContador();
}

function mostrarContador(){
    const contador=localStorage.getItem('contador');

    contadorVisitas.textContent=contador;
}

guardarVisitas();