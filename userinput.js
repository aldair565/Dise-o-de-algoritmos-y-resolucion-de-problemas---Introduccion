function mathematicOperations() {
    let dato1 = parseInt(prompt("Ingrese el primer numero:"));
    let dato2 = parseInt(prompt("Ingrese el segundo numero:"));
    suma = dato1 + dato2;
    alert("La suma es:" + suma);
    resta = dato1 - dato2;
    alert("La resta es:" + resta);
    mult = dato1 * dato2;
    alert("la multiplicación es:" + mult);
    div = dato1 / dato2;
    alert("La división es:" + div);
    rem = dato1 % dato2;
    alert("El restante es:" + rem);
}
mathematicOperations();