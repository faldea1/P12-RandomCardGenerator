//PRIMER EVENTO EN EL CICLO DE SITIO WEB-> ONLOAD. APP/CODE COMIENZA A CORRER:

window.onload = function () {
    console.log('verificando funcionamiento...');

}




//FUNCIONES PARA MOSTRAR CARTA AL AZAR (N° y PALO):


let RandomCardNumber = () => {

    let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    let numberposition = Math.floor(Math.random() * numbers.length);

    return numbers[numberposition];

}

let RandomCardSuit = () => {

    let suits = ["♣", "♠", "♦ ", "♥"];

    let suitsposition = Math.floor(Math.random() * suits.length);

    return suits[suitsposition];

}