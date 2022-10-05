const userName = prompt(`Qual è il tuo nome?`);
console.log(userName)


const surName = prompt(`Qual è il tuo cognome?`);
console.log(surName)

const colorLike = prompt(`qual è il tuo colore preferito?`);
console.log(colorLike)

const number = 22;
console.log(number)


const passwordInsicure = userName + surName + colorLike + number;
 console.log(passwordInsicure);


console.log(`Ciao la tua password isicurissima: ${passwordInsicure}`);

document.getElementById("password").innerHTML = `Ciao la tua password isicurissima: ${passwordInsicure}`;