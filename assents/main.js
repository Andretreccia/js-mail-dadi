//Mail

    //creare archivio mail
const registeredMail = ["1@gmail.com", "2@gmail.com", "3@gmail.com", "4@gmail.com"]
/* console.log(registeredMail); */
    //chiedere all utente la propria mail
const userMail = prompt("Inserisci qui la tua mail")
/* console.log(userMail) */

    //verificare che la mail inseritra dall utente sia presente in archivio
let validate = 0
for (let i = 0; i <= registeredMail.length; i++) {
    if (userMail == registeredMail[i]) {
        validate++
        console.log(validate)
    }

}
if (validate == 0) {
    console.log("non esiste")
}
else {
    console.log("esite!")
}
        //determinare due condizioni e rispettivi eventi






//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

