

// Parar un ciclo infinito en el navegador

/* 
    vamos a los 3puntos: 1- Administradr de tareas; 2- finalizar proceso a la tarea
*/

// PARA SALTAR UNA LINEA Y CONTINUE
// if(i===1){
//     i++
//     continue
// }


// CICLO FOR
// for in: nos da el mismo resultado que el tradicional pero mucho mas limpio
// se encarga de manejar mi condicion y salir del ciclo cuando no hayan mas elementos
let nombres = ['juan', 'pedro', 'lucas', 'jose']

for(let i in nombres){
    // console.log(nombres[i]);
    
}

// for of para tener referencias a valores de objetos o arreglos de una manera mas sencilla
// extrae el valor que se encuentra dentro y lo regresa a la variable nombre
// Cuando tengamos un for dentro de otro for debemos cambiar la variable (i) por (j)
for(let nombre of nombres){
    // console.log(nombre);
    
}


















// CONCATENACION

/* 
    ya no es recomendado que se utilice el signo de mas (+) para concatenar elementos, puede traer problemas a futuro
    es recomendable utilizar backtips(``) 
*/






// CONDICIONAL TERNARIO
/* 
    Es un if muy simplificado nos ayuda a simplificar mucho nuestro codigo
    y mucho mas facil de leer
*/
let horaApertura = (5>3)
                ? `el numero 5 es mayor`
                : `el segundo numero es mayor`;

// console.log(horaApertura);

const elMayor = (a,b)=> (a>b)?a:b;
// console.log(elMayor(25,8))

const nota = 95;

const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A':
              nota >= 85 ? 'B+':
              nota >= 80 ? 'B':
              nota >= 75 ? 'C+':
              nota >= 70 ? 'C': 'F';

// console.log(grado);


















// IF Y ELSE 

// Nos permite decidir si ejecutamos una linea o otra
// Funciona a base de boolean true o falso
// siempre utilizar el (===) para verificar igualdad en tipo y valor 


/* 
    LOGICA BOOLEANA
    !true= false
    !false= true
    && = and si las dos condiciones se cumplen haz esto
    || = or debe de regresar almenos una condicion true para que se ejecute

*/
// PRO TIP
/* 
    el OR escoge una que no sea false; el AND escoge que todas se cumplan para poder ejecutar ese codigo
*/











// Romper referencia en objetos
// Operador spred (...) separa los elementos

let juan = {nombre: 'juan'}
let ana = {...juan}
ana.nombre ='ana'
// console.log(juan);
// console.log(ana);

const frutas = ['manzana', 'naranja', 'guayaba', 'piña'];
const otrasFrutas = [...frutas]
otrasFrutas.push('mandarina')
// console.log(frutas);
// console.log(otrasFrutas);
















// FUNCIONES
// sirven para centralizar la logica y reutilizarla luego
// OJO una funcion creada sin return nos retorna undefined

const hacerPedido = function(nombre){
    // console.log('ir a la caja ' + nombre);

// no olvidar poner el return

// Si se desea retornar varios valores retornarlos en un Array
    return [true, false]
}
const retornoPedido =   hacerPedido('johan')
// console.log(retornoPedido[0],retornoPedido[1]);


// Funcion automatizada
const sumar = (a, b) =>  a + b
// console.log(sumar(20,80))

const getAleatorio = () => Math.random();
// console.log(getAleatorio());


// PRO TIP
// para capturar los demas argumentos (...args); crea un array, debe ser el ultimo definido 
const crearPersona = (nombre, apellido, ...args) =>{
        // cuando queremos retornar la propiedad y tiene el mismo valor  que la variable no hace falta volver a especificarla
            // nombre: nombre,
            // apellido: apellido
            console.log(args);
            
    return{
        nombre,
        apellido
    }
}

const crear_persona = (nombre, apellido) =>({nombre, apellido})
const usuario = crear_persona('johan', 'bedoya')
// console.log(crearPersona('johan', 'bedoya',1,3,2,2));


// Desestructuracion de objetos de dentrp de una funcion
// const {apellido:apellidoUsuario} = crear_persona('sebastian', 'martinez');
// console.log(apellidoUsuario);











// OBJETOS
const persona = {
    nombre: 'johan',
    apellido: 'Bedoya',
    edad: 21,
    coords:{
        lat: 4563737,
        lng: -758585
    }
}

// bloquea las modificaciones de mi objeto en primer nivel

// Object.freeze(persona);
// bloquea las modificaciones de mi objeto en segundo nivel
Object.freeze(persona.coords);
// persona.nombre = 'johan bedoya'


// Borrar una propiedad de un objeto
// delete persona.coords;
// delete persona.edad;

// Crear nuevas propiedades del objeto
persona.casado = false;
persona.vivo = true;


// Para tener pares de valores
const entriepares = Object.entries(persona)
// console.log(entriepares);



// Todas las propiedades de mi objeto
const propiedades = Object.getOwnPropertyNames(persona);
// console.log(propiedades);


// Todos los valores de mi objeto
const valores = Object.values(persona)
// console.log(valores);

















// Arrays

let carros = ['toyota', 'mazda', 'renault', 'nissan', ['moto de tres ruedas', 'cuatrimoto', 'carros chocones']]


// buscar en que pocicion estan los elementos especificos
// devuelve -1 si no encuentra el elemento
let buscarCarro = carros.indexOf('cuatrimoto')
// console.log('Esta en la pocicion ' + buscarCarro);



// añadir elemento a el inicio del array
carros.push('triciclo')
carros.unshift('lamborgini')

// elimina el ultimo elemento
// console.log(carros.pop());

// ver el ultimo elemento
// console.log(carros.length -1);

// borrar apartir de un elemento
let position = 1;
carros.splice(position, 2)
// console.log(carros);






/* 
ALERT, PROMPT, CONFIRM


confirm('deseas cerrar')
prompt('cual es tu nombre', 'sin nombre')
alert('esta es una alerta de emergencia')
console.log(global);

*/