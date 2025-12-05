const listaInvitati = [
    'giampieroburghers@gmail.com',
    'jhonnyfresco@gmail.com',
    'marcosquaglio@gmail.com',
    'sferaebbasta@gmail.com',
    'queenelizabeth@protonmail.com',
    'realcivetta@yahoo.com',
    'cicciopasticcio@gmail.com',
    'mrbean@gmail.com'
];

let isPresent;

// DEBUG

console.log(listaInvitati);

// Chiedo all'utente di fornire la sua mail

let personMail = prompt("Inserisci la tua mail per verificare se sei invitato: ");

for (let i = 0; i < listaInvitati.length; i++) {
    if (listaInvitati[i] === personMail) {
        isPresent = true;
    }
}

if (isPresent === true) {
        console.log("Ci sei broski, entra pure!");
}

else {
    console.log("Non puoi entrare broski :(");
}