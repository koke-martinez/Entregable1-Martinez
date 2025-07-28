const articulos = [];
const precios = [];
const cantidades = [];

function conseguirDatos (){
let promptArticulo =prompt("Nombre Del Articulo:");
    while(!promptArticulo){
         alert("Ingrese un Valor")
        promptArticulo =prompt("Nombre Del Articulo:");
        
    }
    let precioArticulo = prompt("Precio del Articulo");
     while( isNaN(precioArticulo)){
        alert("Ingrese unicamente Numeros")
        precioArticulo =prompt("Precio del Articulo:");
        
    }
    let promptCantidades = prompt("Cantidad Vendida");
     while(isNaN(promptCantidades)){
        alert("Ingrese unicamente Numeros")
        promptCantidades= prompt("Cantidad Vendida");
 
    }
    articulos .push(promptArticulo);
    precios .push(Number (precioArticulo));
    cantidades .push(Number (promptCantidades));
}
function calcularDatos(index){
let resultado = precios[index] * cantidades[index];
console.log (`Subtotal: $${resultado}`);
return resultado;
}
function info (){
    let seguirConsiguiendo = true;
     alert("Ingresar datos");
    while(seguirConsiguiendo){
        conseguirDatos();
        seguirConsiguiendo = confirm("desea ingresar mas datos");
    }
    let total = 0;

    for (let i = 0;i < articulos.length; i++){
        console.log (`Nombre del articulo: ${articulos[i]}`)
        total+= calcularDatos(i)

    }
console.log(`total: $${total}`);

    }
info();