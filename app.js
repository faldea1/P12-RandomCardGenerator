//PRIMER EVENTO EN EL CICLO DE SITIO WEB-> ONLOAD. APP/CODE COMIENZA A CORRER:

window.onload = () => {
    console.log('verificando funcionamiento...');

    //FUNCIONES PARA MOSTRAR CARTA AL AZAR (N° y PALO):
  
    document.querySelector('.number').innerHTML = (RandomCardNumber());

    let RandomCardSuits = RandomCardSuit() //para aplicar simultaneamente el mismo resultado aleatorio.

        document.querySelector('.t-suit').innerHTML = RandomCardSuits;
        document.querySelector('.b-suit').innerHTML = RandomCardSuits;
    
    
    if (document.querySelector('.t-suit').innerHTML === "♥" || document.querySelector('.t-suit').innerHTML === "♦" ){ //para aplicar color rojo en caso de carta palo corazón o diamante.
        document.querySelector('.t-suit').style.color = "red";
        document.querySelector('.b-suit').style.color = "red";
    }
      

}










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



