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
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

