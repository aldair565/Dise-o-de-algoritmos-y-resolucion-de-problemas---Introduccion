let dato = prompt("Añade el numero de tareas:");
if (dato == 0 && dato <= 6) {
  alert("Failed");
} else if (dato > 6 && dato <= 9) {
  alert("Insufficient");
} else if (dato > 9 && dato <= 14) {
  alert("good");
} else if (dato == 15) {
  alert("Excelent");
} else if (dato < 0) {
  alert("error");
} else if (dato > 15) {
  alert("error");
}