function guardarAlmacenamientoLocal(llave, valor_a_guardar){
    localStorage.setItem(llave, JSON.stringify(valor_a_guardar))
}

function obtenerAlmacenamientoLocal(llave){
    const datos = JSON.parse(localStorage.getItem(llave))
    return datos
}

let productos = obtenerAlmacenamientoLocal('productos') ||[];

const informacionCompra = document.getElementById('informacionCompra');
const contenedorCompra = document.getElementById('contenedorCompra');
const productosCompra = document.getElementById('productosCompra');
const contenedor = document.getElementById('contenedor');
const carrito = document.getElementById('carrito');
const numero = document.getElementById('numero');
const header = document.querySelector('#header');
const total = document.getElementById('total');
const body = document.querySelector("body");
const x = document.getElementById('x');


let list=[]
let valortotal = 0

window.addEventListener("scroll", function(){
    if(contenedor.getBoundingClientRect().top < 10){
        header.classList.add("scroll")
    }
    else {
        header.classList.remove("scroll")
    }
})