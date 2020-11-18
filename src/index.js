import './styles.css'
/* 
    LA MEJOR MANERA DE PREDECIR EL FUTURO ES CREARLO
    - Peter Druker
*/



// Creamos el array vacio de cartas y los tipos de cartas y cartas especiales
let deck         = [];
const tipos      = ['C','D','H','S'],
      especiales = ['A','J','Q','K'];



// Creamos el contador de puntos jugadores
let puntosJugadores = [];


// Referencia a los botones del HTML
// document.querySelector('nombreId||clase');

const btnPedir   = document.querySelector('#btnPedir'),
      btnDetener = document.querySelector('#btnDetener'),
      btnNuevo   = document.querySelector('#btnNuevo');



// Hacemos referencia a todos los Div con clase('.divCarta') y le ponemos el nombre (divCartasJugadores) igualmente con 
// todas las etiquetas ('small')
const divCartasJugadores = document.querySelectorAll('.divCartas'),
      puntosHTML = document.querySelectorAll('small');




// Esta función inicializa el juego  con 2 jugadores por defecto
const inicializarJuego = ( numJugadores = 2 ) => {
    // Llamado a la funcion crearDeck();
    deck = crearDeck();


    // cada que se reinicie el juego se va a poner el array de     (puntosJugadores = [];) vacio
    puntosJugadores = [];

    for( let i = 0; i< numJugadores; i++ ) {
        // se reinician el div de todas las imagenes
        puntosJugadores.push(0);
    }
    
    // ciclo o bucle que borra todos los puntos del html
    puntosHTML.forEach( elem => elem.innerText = 0 );
    
    // ciclo o bucle que borra todos los puntos del html
    divCartasJugadores.forEach( elem => elem.innerHTML = '' );


    // vuelve a habilitar los botones ya que tienen la propiedad (disable=true) en el html 
    btnPedir.disabled   = false;
    btnDetener.disabled = false;

}


// Esta función crea un nuevo deck
const crearDeck = () => {

    // Reinicia la baraja a un array vacio
    deck = [];
    
    // iniciamos el contador desde 2 ya que el nombre de nuestra carta la primera empiezan 2C.png 
    // ponemos (<= 10) ya que son la cantidad de cartas que tengo para cada tipo 
    for( let i = 2; i <= 10; i++ ) {


        // En este punto le asigna un tipo a cada numero y queda asi: 2C, 2D, 2H,etc
        for( let tipo of tipos ) {
            deck.push( i + tipo);
            // console.log('Este es el deck' + deck);
            
        }
    }
    
    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo);
            // console.log('Este es el deck completo con el especial' + deck);
        }
    }
    return _.shuffle( deck );
    /* 
    libreria: Underscorejs.org
    shuffle _.shuffle(list)
    Devuelve una copia aleatoria de la baraja(deck) en cada recarga
    

    IMPORTANTE: debemos de realizar al instalacion del CDN en el index.html asi:
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.11.0/underscore-min.js"></script> -->

    
    */
}

// console.log(deck);


// Esta función me permite tomar una carta
// Si no hay cartas regresa un error sino elimina la ultima carta y devuelve una nueva baraja sin la anterior carta
const pedirCarta = () => {
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}


const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
    ( valor === 'A' ) ? 11 : 10
    : valor * 1;
    /* 
        validamos con el condicional ternario si no es numero  va a hacer lo siguiente
            si valor es excactamente igual a "A" le va a asignar el valor de 11
            si es cualquier otra la letra la va a igualar a 10
            sino va a devolver el numero multiplicado por 1 o cual es el mismo numero
    */
    /* 
        carta.substring(inicio, fin):
             el inicio debe de ser obligatorio desde el 0 hasta la longitud de la cadena,
             nos devuelve la cantidad de letras indicadas carta.substring(0, 2) = 'Ho',
             si el indice es negativo, null, undefined, etc lo igualara a cero,
             si ponemos de inicio a fin el mismo numero devuelve un string vacio ("")
    
    */
}   



// Turno: 0 = primer jugador y el último será la computadora

/* 
    Recibe una carta y un turno 
*/
const acumularPuntos = ( carta, turno ) => {

    //Le asigna a el valor  puntosJugadores[turno||jugador] el mismo valor sumandole el valor de la carta
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
    // a los puntos en el html le incertamos el texto de puntos jugador en el html dependiendo del turno del jugador
    puntosHTML[turno].innerText = puntosJugadores[turno];
    // Retorna los puntos del jugador
    return puntosJugadores[turno];
}



const crearCarta = ( carta, turno ) => {


// Creamos la imagen primero con la etiqueta html ("img")
    const imgCarta = document.createElement('img');
    // luego le asignamos la url `con el nombre de la carta selevccionada en cada momento`
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    // le añadimos la clase ('carta) a la etiqueta (imgCarta)
    imgCarta.classList.add('carta');
    // Seleccionamos el div de cartas del html y le añadimos dentro la carta creada anterior mente
    divCartasJugadores[turno].append( imgCarta );

}




const determinarGanador = () => {

    // Desestructuramos puntos minimos y computadora en constante de el array = (puntosJugadores)
    // Deben ser extraidos en orden ya que no son pasados por referencia sino por pocicion  
    
    const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

    // Verificamos si son de igual el mismo valor para los dos jugadores nadie gana
    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
            // Verificamos si los puntos del primer jugador son mayores a 21 la computadora gana
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
            // Verificamos si los puntos de la computadora son mayores a 21 jugador1 gana
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
        // si pasa alguna otra opcion la computadora gana
            alert('Computadora Gana')
        }
    }, 100 );

}


// turno de la computadora
const turnoComputadora = ( puntosMinimos ) => {
    // Definimos el contador de la computadora
    let puntosComputadora = 0;
    //**** */ Hacer esto mientras 
    do {
        // asignamos a carta lo que devuelva pedir carta (una carta aleatoria)  
        const carta = pedirCarta();
        // a los puntos de computadora le asignos la funcion acumular puntos que recibe una carta y un turno (le enviamos el ultimo)
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1 );
        // llamamos la funcion crear carta enviandole la carta y el turno 
        crearCarta(carta, puntosJugadores.length - 1 );
        //**** */ Esto se cumpla: Mientras que puntos computadora sean menores a puntos  del jugador y que mientras los puntos 
        // del jugador sean menores o iguales a 21 de lo contrario el jugador ya ha perdido
    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    
    // Luego que se ejecute el anterior codigo determinamos quien ha ganado
    determinarGanador();
}





// Eventos 
// A el boton (PEDIR CARTA) le escuchamos el evento 'Click' y que llame las instrucciones 
btnPedir.addEventListener('click', () => {

    // pedirCarta() devuelve la ultima carta dela varaja 'barajada'
    const carta = pedirCarta();
    // creamos los puntos del jugador y le asignamos la funcion:
    // acumularPuntos( recibe una carta y un turno le asignamos el turno 0 que es el primer jugador);
    const puntosJugador = acumularPuntos( carta, 0 );

    // luego creamos la carta fisica en el html enviando la carta '2D' y la pocicion del jugador
    crearCarta( carta, 0 );

// si los (puntosJugador) son mayores a 21 pierde automatica mente y 
// le cede el turno a la computadora que con solo un turno ganara 
// desabilitara los botones y le concede el turno a la computadora
if ( puntosJugador > 21 ) {
    console.warn('Lo siento mucho, perdiste');
    btnPedir.disabled   = true;
    btnDetener.disabled = true;
    turnoComputadora( puntosJugador );
    
    // si el jugador tiene suerte y le salen 21 puntos precisos ganara 
    // desabilitara los botones y le concede el turno a la computadora

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );
    }

});



// al darle a el boton (Detener) desabilita los botones y llama el turno de la computadora que va a tirar cartas mientras
// sea menor a puntos jugadores y 21 puntos
btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugadores[0] );
});


btnNuevo.addEventListener('click', () => {
    
    inicializarJuego();

});








