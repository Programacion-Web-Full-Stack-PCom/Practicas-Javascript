/* ------------------ Condicionales simples ------------------ */
const edad = 17;

if (edad >= 18) {
  console.log("1. Puedes entrar al cine");
}

/* ------------------ Condicionales con alternativa ------------------ */
if (edad >= 18) {
  console.log("2. Puedes entrar al cine");
} else {
  console.log("2. No puede entrar al cine.");
}

/* ------------------ Condicionales múltiples ------------------ */
const dia = "lunes";

if (dia == "lunes") {
  console.log("Hoy es lunes");
} else if (dia == "martes") {
  console.log("Hoy es martes");
} else if (dia == "miércoles") {
  console.log("Hoy es miércoles");
} else if (dia == "jueves") {
  console.log("Hoy es jueves");
} else if (dia == "viernes") {
  console.log("Hoy es viernes");
} else if (dia == "sábado") {
  console.log("Hoy es sábado");
} else {
  console.log("Hoy es domingo");
}

/* ------------------ Condicionales múltiples switch ------------------ */
switch (dia) {
  case "lunes":
    console.log("Hoy es lunes");
    break;
  case "marte":
    console.log("Hoy es martes");
    break;
  case "miércoles":
    console.log("Hoy es miércoles");
    break;
  case "jueves":
    console.log("Hoy es jueves");
    break;
  case "viernes":
    console.log("Hoy es viernes");
    break;
  case "sábado":
    console.log("Hoy es sábado");
    break;
  default:
    console.log("Hoy es domingo");
    break;
}
