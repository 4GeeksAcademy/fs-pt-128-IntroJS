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


//---------------------- EJERCICIOS ------------------------///

// 142.2 ArrayToObject
// Escribe una función fromListToObject que tome una matriz (array de arrays), 
// y retorne un objeto con cada par de elementos de la matriz como un 
// par clave-valor (key-value).
// 📎 Ejemplo:
// let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]);
// console.log(output); // --> { make : 'Ford', model : 'Mustang', year : 1964 }
// 💡 Pistas:
// No modifiques el array dado.
// Asume que todos los elementos del array serán de tipo string.
// Ten en cuenta que la entrada puede tener una cantidad de elementos que puede variar. 
// Por ejemplo, si la entrada tenía 6 valores en lugar de 4, tu código debe ser capaz de adaptarse.

let arreglo = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

// const fromListToObject = (arreglo) => {
//     let objeto = {} 
    
//     for (const element of arreglo) {
//         objeto[element[0]] = element[1]
//     }
//     console.log(objeto);
    
// }
// fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])



// 147 filpEveryNchars
// 📝 Instrucciones:
// Declara una función llamada flipEveryNChars.
// La función acepta 2 parámetros cuyos valores serán un string y un número.
// Cuando llames a la función, esta devuelve un string con cada n de caracteres invertidos, 
// incluidos los espacios.

// 📎 Ejemplo:
// let input = 'a short example'; 
// let output = flipEveryNChars(input, 5);
// console.log(output); // --> ohs axe trelpma
// Desglosando este ejemplo, pieza por pieza:

// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'

// -> 'ohs axe trelpma'

const flipEveryNChars = (input, numero) => {
    let result = ""
    for (let index = 0; index < input.length; index+=numero) {
        let pedazo = input.slice(index, numero + index)
        let pedazoSplit = pedazo.split("")
        let reversePedazo = pedazoSplit.reverse()
        let joinReversePedazo = reversePedazo.join("")
        //console.log(joinReversePedazo);
    }
}
flipEveryNChars('a short example', 5)



//150 isRotated
// Una rotación en un string se define como quitar el primer elemento y concatenarlo al final. 
// Dado N y una matriz de N cadenas. Tu trabajo es predecir el mínimo número de rotaciones 
// en los strings para que todos los strings sean iguales.

// 📝 Instrucciones:
// La función isRotated recibe dos strings como parámetro, isRotated debe retornar true 
// si el segundo string es una versión rotada del primer string.
// 📎 Ejemplo:
// let output = isRotated("Hello World", "orldHello W")
//orldHello W
//rldHello W
//rldHello Wo
//ldHello Wor
//dHello Worl
//Hello World
// console.log(output) // --> true
 const isRotated = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false
    }
    //Convertir los string a arreglos
    let arr1 = str1.split("")
    let arr2 = str2.split("")
    //console.log(arr1, arr2);

    //intentamos rotar arr2 tantas veces como largo sea
    let vecesARotar = arr2.length

    while (vecesARotar  > 0) {
        let primerCaracter = arr2[0]
        //console.log(primerCaracter);
        
        //quitamos el primer caracter del arreglo
        arr2.shift()
        //console.log(arr2);

        arr2.push(primerCaracter)
        //console.log(arr2);

        //comparamos
        // console.log(arr1.join(""));
        // console.log(arr2.join(""));
        if (arr1.join("") === arr2.join("")) {
            
            
            //console.log("he conseguido que sean iguales");
            return
        }
        
        vecesARotar--
        //console.log("ni que quiera estos dos seran iguales");
        
    }

    
 }

 isRotated("Hello World", "orldHello W")







//146 flipPairs
// 📝 Instrucciones:
// Declara una función llamada flipPairs.

// La función acepta un string como parámetro.

// Cuando llames la función, debe retornar el string con cada par de caracteres invertidos, incluidos los espacios.

// 📎 Ejemplo:
// let input = 'check out how interesting this problem is, it\'s insanely interesting!';
// let output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!





//153 phoneNumber
// 📝 Instrucciones:
// Usa el esqueleto dado y modifica las funciones para que dado un array de números, genere un número de teléfono en el siguiente formato: (000) 000-0000
// 📎 Ejemplo:
// let output = PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]).render();
// console.log(output); // --> "(650) 835-9172"
// 💡 Pistas:
// No dejes ningún método sin usar.

// Este es un ejemplo de una mala implementación:

// function renderPhoneNumber(numbers){
//  return '(' + numbers[0] + numbers[1] + numbers[2] + ') '
//    + numbers[3] + numbers[4] + numbers[5] + '-' 
//    + numbers[6] + numbers[7] + numbers[8] + numbers[9];
// }
// Lo que deberías hacer en su lugar es leer el esqueleto orientado a objetos y después de comprender el flujo de procesamiento de la información, completar la implementación.




//07.2 Letter Counter
// Nuestro cliente necesita un programa que cuente las repeticiones de las letras en un string dado. 
// Sé que es extraño, pero es muy testarudo ¡Lo necesitamos lo antes posible!
// 📝 Instrucciones:
// Crea un objeto donde las letras son las propiedades y los valores son el número de veces 
// que esa letra se repite en toda la cadena.
// Por ejemplo:
// const word = "Hello World";
// // Debería imprimir en la consola { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
// 💡 Pistas:
// Recorre todo el string (usa un bucle).
// En cada iteración verifica si el objeto counts tiene la letra inicializada como una propiedad.
// Si no está inicializada, hazlo y establece el valor en 1 (la primera vez que se encuentra).
// Si ya se inicializó, simplemente incrementa el valor de la propiedad en uno.
// Recuerda ignorar los espacios en blanco en el string.
// Debes colocar en minúscula (lowercase) todas las letras para tener un conteo exacto 
// de todas las letras.
let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let contador = {}

for (const index in par) {
    const letra = par[index].toLocaleLowerCase()
    if (letra == " ") {
        continue
    }else if(contador[letra] == undefined){
        //si la letra todavia no existe en el objeto, la inicializo en 1
        contador[letra] = 1
    }else{
        contador[letra] = contador[letra] + 1
    }


}
console.log(contador);

