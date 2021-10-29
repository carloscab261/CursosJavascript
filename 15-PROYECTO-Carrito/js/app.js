//variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos');
let artuculosCarritos = [];



cargarEventListeners();

function cargarEventListeners(){
    //Cuando agregas un cuso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);


}

//Funciones
function agregarCurso(e){ 
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
    
} 

//Lee el contenido del html al que le dimos click y extrae la informacion del curso


function leerDatosCurso(curso){
    //console.log(curso);
    //Crear un objeto con el contenido del curso actual
    const infoCurso= {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent, 
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,


    }
    //Agregar elementos al arreglo del carrito
    artuculosCarritos = [...artuculosCarritos, infoCurso]

    console.log(artuculosCarritos)
    carritoHTML();
}

//Muestra el carrito de compras en el html

function carritoHTML() {
    //Limpiar el HTML
    limpiarHTML();

    //Recorre el carrito y genera el HTML
    artuculosCarritos.forEach(curso =>{
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;
        //Agrega el HTML en el carrito en el tbody
        contenedorCarrito.appendChild(row);
    })
}

function limpiarHTML(){
    //Forma lenta
    //contenedorCarrito.innerHTML= '';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);

    }
}
 