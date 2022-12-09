//PRIMER EVENTO EN EL CICLO DE SITIO WEB-> ONLOAD. APP/CODE COMIENZA A CORRER:

window.onload = () => {
    console.log('verificando funcionamiento...');

    //GENERAR CARTA AL AZAR
  
    document.querySelector('.number').innerHTML = (RandomCardNumber());
    document.querySelector('.b-suit').innerHTML = (RandomCardSuit());
       


}


//FUNCIONES PARA MOSTRAR CARTA AL AZAR (N° y PALO):


let RandomCardNumber = () => {

    let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    let numberposition = Math.floor(Math.random() * numbers.length);

    return numbers[numberposition];

};

let RandomCardSuit = () => {

    let suits = ["♣", "♠", "♦", "♥"];

    let suitsposition = Math.floor(Math.random() * suits.length);

    return suits[suitsposition];


};



