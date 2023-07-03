for(var i=0; i<4; i++) {
    console.log("hola"[i]);
}

function encontrarVocalA (string){
    for (var i = 0; i < string.length; i++){
        if (string[i] === 'a'){
        return "Encontramos la vocal a"
    }
}
return "No encontramos la vocal a"
}
console.log(encontrarVocalA("seniora"));

function encontrarVocalA(string) {
for (i = 0; i < string.length; i++) {
    if (string[i] === 'a') {
        return "Encontramos la vocal a"
    }
}
return "No encontramos la vocal a"
}
console.log(encontrarVocalA('trocha'))

var contador = 1;
while (contador <= 6) {
    console.log("El contador es: " + contador++)
}

var contador = 1;
do {
console.log("El contador es: " + contador++);
}
while(contador <= 6);

function diaDeLaSemana (dia) {
  switch (dia) {
    case "Lunes":
    console.log("Hoy es lunes");
    break;
    case "Martes":
    console.log("Hoy es Martes");
    break;
    case "Miercoles":
    console.log("Hoy es Miercoles");
    break;
    case "Jueves":
    console.log("Hoy es Jueves");
    break;
    case "Viernes":
    console.log("Hoy es Viernes");
    break;
    default: 
    console.log("El dia no es valido")
  }
}
diaDeLaSemana("Jueves")

for (var i = 0; i < "hola".length; i++) {
    console.log("hola"[i])
}
function encontrarVocalA (string){
for (var i = 0; i < string.length; i++) {
    if (string [i] === "a")
return "Encontramos la vocal a";
}
return "No encontramos la vocal a";
}ß
console.log(encontrarVocalA("Hola"))

var count = 1;
while (count < 6) {
console.log ("Count is: " + count);
count ++;
}

var count = 1;
do {
    console.log ("Count is " + count);
count ++;
}
while (count < 6);

function diaDeLaSemana (dia) {
    switch (dia) {
      case "Lunes":
      console.log("Hoy es lunes");
      break;
      case "Martes":
      console.log("Hoy es Martes");
      break;
      case "Miercoles":
      console.log("Hoy es Miercoles");
      break;
      case "Jueves":
      console.log("Hoy es Jueves");
      break;
      case "Viernes":
      console.log("Hoy es Viernes");
      break;
      default: 
      console.log("El dia no es valido")
    }
  }
console.log(diaDeLaSemana("Jueves"))

var comidas = ["Pizza", "Hamburguesa", "Hot dog", "Lasagna"]
var comidaFavorita = comidas[2]
//console.log (comidaFavorita )
comidas [2] = 'Pastas';
console.log (comidas [2])

var comidas = ["Pizza", "Hamburguesa", "Pastas", "Lasagna"]
for (var i = 0; i < comidas.length; i++) {
console.log(comidas [i]);

var comidas = ["Pizza", "Hamburguesa", "Pastas", "Lasagna"];
for (comida of comidas) {
    console.log(comida);
}