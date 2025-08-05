document.getElementById('btnColor').addEventListener('click',()=>{
 console.log('wenasss');
 const cuadro= document.getElementsBy('cuadro');
 cuadro.classList.toggle('cambio');
});

cuadro.addEventListener('click',()=>{
    alert('le diste clcik al cuadro')
});

cuadro.addEventListener('mouseover',()=>{
    cuadro.style.border='3px solid black';
});

cuadro.addEventListener('mouseout',()=>{
    cuadro.style.border='none';
});

//document.addEventListener('keydown',function(e){
//documentElementByid('textoXD').innerHTML+=`<p>presionastes: ${e.key}</p>`);
//console.log(`presionastes: ${e.key}`);
//});

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    alert(`Hola, ${nombre}!`);

    
});


const inputGeneral= document.getElementById('inputTexto');
const resultado = document.getElementById('resultado');

inputGeneral.addEventListener('input', () => {
 resultado.textContent = inputGeneral.value;

});