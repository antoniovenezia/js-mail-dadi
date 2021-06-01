// PRIMA PARTE DELL'ESERCIZIO - MAIL
var userMail = prompt("Qual'è il tuo indirizzo email?");
console.log("mail");

var allEmail = ["ciao@gmail.com", "salve@hotmail.it", "buongiorno@alice.it", "arrivederci@libero.it"];

var check = false;

for (var i = 0; i < allEmail.length; i++) {
    if (userMail === allEmail[i]) {
        check = true;
        break;
    } 
}

if (check) {
    document.getElementById("mail").innerHTML = "Ok, puoi accedere al portale!";
    } else {
        document.getElementById("mail").innerHTML = "Ci dispiace, non puoi accedere al portale!";
    }



// SECONDA PARTE DELL'ESERCIZIO - DADI
var x = Math.round(Math.random()*10);
var y = Math.round(Math.random()*10);


if (x > y) {
    document.getElementById("numbers").innerHTML += x + " Numero random player";
} else {
    document.getElementById("numbers").innerHTML += y + " Numero random computer";
}