//function checkTwoStringsSame(str1, str2) {}
let cad1 = prompt("contraseña");
let cad2 = prompt("escribe nuevamente tu contraseña");
function validar2(password1, password2) {
  if (password1 == password2) {
    console.log(true);
  } else {
    console.log(false);
  }
}
validar2(cad1, cad2);