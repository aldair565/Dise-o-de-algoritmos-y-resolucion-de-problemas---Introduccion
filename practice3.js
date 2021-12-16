
let articulo1 = parseInt(prompt("Introduce el precio del artículo: "));
let articulo2 = parseInt(prompt("Introduce el precio del artículo: "));
let articulo3 = parseInt(prompt("Introduce el precio del artículo: "));

let articulos = [articulo1,articulo2,articulo3];

articulos.sort();

articulos.splice(0,1);

console.log("Articulo 1-> " + articulos[0] + "\n" +
            "Articulo 2-> " + articulos[1] + "\n");

