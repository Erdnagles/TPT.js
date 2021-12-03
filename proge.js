var number = Math.floor(Math.random() *10) + 1;

for (var i = 0; i < 3; i++){

  const kasutajasisend = parseInt(prompt("Paku mis arvu genereerib arvuti vahemikus 1-10"))

  if (kasutajasisend === number) {
    console.log("Yay! Arvasid õige numbri ära!");
    break;
  } else if (kasutajasisend - number == 1 || number - kasutajasisend == 1) {
    console.log("Ai, sa pakkusid väga lähedale.");
  } else { 
    console.log("Sorry, " + kasutajasisend + " ei ole õige number.");
  } 

  if(i == 2) {
    console.log("AIH, Katsed otsas, õige number oli " + number)
  } 
}
