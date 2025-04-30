const cuerpo = document.getElementById("cuerpo");

const boton = document.getElementById("apagar");

boton.addEventListener('click', () => {

    cuerpo.classList.toggle('oscuro');

    cuerpo.classList.toggle('claro');
    
    boton.textContent = document.body.classList.contains('claro')? 'APAGAR LUZ' : 'PRENDER LUZ';
});
