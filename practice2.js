
let n=5; // Longitud del array
let numero=[]; // Declarando el array

// Ciclo para escanear los números
for(let i=0;i<n;i++){
    numero[i] = parseInt(prompt("Ingrese un número: "));
}

let maximo=numero[0]; // Declara como maximo el primer elemento del array

// Ciclo para determinar el máximo
for(let i=1;i<n;i++){
    if(numero[i]>maximo){ // Condicional para saber si el número es mayor o no
        maximo=numero[i]; 
    }
}

console.log("El máximo es: " + maximo);

