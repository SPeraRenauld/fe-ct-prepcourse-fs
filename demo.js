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