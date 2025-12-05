let userNumber;
let pcNumber;

userNumber = Math.random() * 6;
pcNumber = Math.random() * 6;

userNumber = parseInt(userNumber);
pcNumber = parseInt(pcNumber);

if (userNumber > pcNumber) {
    console.log("Hai vinto!!!");
}

else if (userNumber < pcNumber) {
    console.log("Opsie, hai perso :(");
}

else {
    console.log("Hey, siete pari!");
}

console.log("Il tuo numero è: ", userNumber);
console.log("Il numero della macchina è: ", pcNumber);

console.log("Che divertimento!!!");