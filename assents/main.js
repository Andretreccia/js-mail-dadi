//Mail

//creare archivio mail
const registeredMail = ["1@gmail.com",
    "2@gmail.com",
    "3@gmail.com",
    "4@gmail.com",
    "5@gmail.com",
    "6@gmail.com",
    "7@gmail.com"]
/* console.log(registeredMail); */
//chiedere all utente la propria mail
const userMail = prompt("Inserisci qui la tua mail")
/* console.log(userMail) */

//verificare che la mail inseritra dall utente sia presente in archivio
let validate = 0
for (let i = 0; i <= registeredMail.length; i++) {
    if (userMail == registeredMail[i]) {
        validate++
        //console.log(validate)
    }
}
//stampa un messaggio differente a seconda dell'esito della ricerca
if (validate == 0) {
    //console.log("non esiste")
    const nonEsiste = document.querySelector(".title")
    nonEsiste.insertAdjacentHTML("afterend", "<p>Ci dispiace ma la mail da lei inserita non risulta presente nei nostri archivi.</p>")
}
else {
    //console.log("esite!")
    const esiste = document.querySelector(".title")
    esiste.insertAdjacentHTML("afterend", "<p>La mail da lei inserita è presente nei nostri archivi.</p>")
}




//Gioco dei dadi

//definizioni delle variabili
const bottone = document.getElementById("click");
const result = document.querySelector(".result")
let scorePlayer
let scoreComputer

//funzione al click del bottone

bottone.addEventListener('click', scoreFunction);
function scoreFunction() {

    //generazione risultato tiro del giocatore

    scorePlayer = Math.round((Math.random() * 6) + 1);
    document.querySelector(".score_player").innerHTML = (scorePlayer)
    console.log("player " + scorePlayer);

    //generazione risultato tiro computer

    scoreComputer = Math.round((Math.random() * 6) + 1);
    document.querySelector(".score_computer").innerHTML = (scoreComputer)
    console.log("computer " + scoreComputer);

    //condizioni per la visualizzazione del risultato 

    if (scoreComputer > scorePlayer) {
        result.innerHTML = ("Il Computer!")
        console.log("ha vinto il pc")
    }
    else if (scoreComputer < scorePlayer) {
        result.innerHTML = ("Il Giocatore!")
        console.log("giocatore vince")
    }
    else {
        result.innerHTML = ("Nessuno, parità!")
        console.log("pareggio")
    }
}








