// console.log("Hello Rigo from the console!");

//FORMAS DE DECLARAR UNA VARIABLE
// let edad = 25
// var nombre = "Mario"
// const pais = "Mushroom Kingdom"

//POR QUE NO USAR VAR
//bloque o scope
//VAR no respeta el scope
// if(true){
//   var nombreTwo = "Peach"
// }

// console.log(nombreTwo);

// if(true){
//   let nombrethree = "Luigi"
//   console.log(edad);
  
// }


// // Var me permite declararla varias veces
// var fruta = "Manzana"
// console.log(fruta);
// if (true) {
//   var fruta = "Banana"
  
// }
// // console.log(fruta);

// let nombre = "Mario"
// if(true){
//   console.log(nombre);
//   //let nombre = "Luigi"
// }

//TIPOS DE DATOS
// let numero = 42
// let tieneBigote = true
// let texto = "Mamma Mia!!"
//                0                   1
// let powerUps = ["Flor de Fuego", "Estrella"]
// let princesa = {
//   //key:value
//   name: "Peach",
//   edad: 25,
//   cabello: "Amarillo",
//   cualidades: ["valiente", "dejarse atrapar por Bowser"],
//   ropa: {
//     vestido: "largo, rosa",
//     zapatos: "tacones"
//   }
// }
// console.log(princesa["ropa"]["zapatos"]);

//OPERADORES

//MATEMATICOS
// let total =5 +10
// let daño = "Hola"-"a"
// let duplicar = 4*2
// let dividir = 20/4

// console.log(daño);

//COMPARACION
// let vidas = 3
// console.log(vidas !== "3");


//LOGICOS
// let tieneLlave = false
// let puertaAbierta = false

// console.log(tieneLlave && puertaAbierta);
// console.log(tieneLlave || puertaAbierta);
// console.log(!tieneLlave);

// //FUNCIONES
// function saltar() {
//   console.log("Mario Saltó");
  
// }
// //funcion flecha anonima
// //(params)=>{contenido de la funcion o la logica}

// const correr = () => {
//   console.log("Mario corre");
// }
// function elTimeOut() {
//   console.log("el resultado");
// }
// console.log("voy a ejecutar el timeout");
// setTimeout(()=> console.log("algo"), 5000)
// console.log("ya ejecute");



//CONDICIONALES

// let tieneEstrella = true
// if (tieneEstrella) {
//   console.log("Mario es invensible, corre sin temor a Dios");
  
// } else {
//   console.log("Cuidado con los Goombas");
  
// }

// let puntos = 100

// if (puntos >= 100) {
//   console.log("Ganaste una vida extra");
  
// } 
// if(puntos >= 50 && puntos < 100){
//   console.log("Buen trabajo");
  
// }
// if(puntos < 50) {
//   console.log("Sigue intentandolo");
  
// }

//FOR LOOPS
//                 0        1       2
let objetos = ["hongo", "flor", "estrella"];
// console.log(objetos.length);


let saludar = "hola mundo"

// index = -1
// for (let index = objetos.length - 1; index >= 0; index--) {
//     console.log(objetos[index]);
// }

// for (const item of objetos) {
//     console.log(item);
// }

// for (const index in objetos) {
//     console.log(index);  
// }


// METODOS DE ARREGLOS

//.map
//crea un nuevo arreglo transformando cada elemento segun la funcion que se pasa

const empleados = [
    //key:value
  { nombre: "Mario", salario: 1000 },
  { nombre: "Peach", salario: 2000 },
  { nombre: "Toad", salario: 1500 }
];


const empleadosConAumento = empleados.map((esclavo)=>{

    if(esclavo.nombre !== "Toad"){
        return {
            nombre: esclavo.nombre,
            salario: esclavo.salario + 500
        }
    }
    if (esclavo.nombre == "Peach") {
        return {
            nombre: esclavo.nombre,
            salario: esclavo.salario + 1000
        }
    }
    return esclavo
})
 //console.log(empleadosConAumento);
// console.log(empleados);

// .filter
//CREA un nuevo arreglo con los elementos que CUMPLEN la condicion que se le pasa

const empleadosQueGananMucho = empleadosConAumento.filter((esclavo)=>{
    return esclavo.salario > 2000
})
// console.log(empleadosQueGananMucho);


//.push
//MODIFICA el arreglo original, agregando uno o mas elementos al final 
// y devuelve la nueva longitud del arreglo

let tareas = ["Preparar informe", "Actualizar base de datos"];
//tareas.push("Ir al Banco")

// console.log(tareas);

// console.log(tareasConIrAlBanco);

// .reduce
//Reduce todos los elementos de un arreglo a un UN solo valor 
// usando una funciona que acumula el resultado

const carritoDeCompras = [
  { item: "hongos", costo: 10, cantidad: 2 },
  { item: "flores de fuego", costo: 20, cantidad: 3 },
  { item: "estrellas", costo: 30, cantidad: 1 }
];


const total = carritoDeCompras.reduce((acumulado, elementoQueItero)=>{
    return (acumulado + (elementoQueItero.costo * elementoQueItero.cantidad))
},500)
// console.log(total);


//.includes
//Verifica si un arreglo contiene un valor especifico y devuelve true o false
const eventos = ["almuerzo", "code review", "reunión secreta"];

//console.log(eventos.includes("ir al banco"));


//DESESTRUCTURACION
//OBJETOS
const empleado = {
  nombre: "Luigi",
  cargo: "QA Tester",
  salario: 1800
};

const {nombre, cargo, salario} = empleado

//console.log(`El empleado de nombre: ${nombre}, con el cargo de: ${cargo}, tiene un salario de: ${salario}`);


//ARREGLOS

const colores = ["rojo", , "azul"];
const [,segundo] = colores

//console.log(segundo);


//Spread Operator
//permite copiar los elementos de un arreglo u objeto y combinarlos facilmente

const equipoA = ["Mario", "Toad"];
const equipoB = ["Peach", "Luigi"];

const superEquipo = [...equipoA, ...equipoB, "Bowser"]

const [, , , , pepetrueno] = superEquipo 
// console.log(pepetrueno);


const empleadoBase = {
  nombre: "Goomba",
  puesto: "Asistente",
  salario: 500
};

const empleadoConBeneficios = {
    ...empleadoBase,
    beneficios: ["Seguro dental", "Nevera con cervezas en el escritorio", "acceso al baño privado"]
}
//console.log(empleadoConBeneficios);


