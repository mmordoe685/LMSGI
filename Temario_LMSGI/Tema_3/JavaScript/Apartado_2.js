/*Diseña un script que vaya leyendo números y guardándolos en un array. Una vez lleno mostrará el array y deberá decir cuantos números son pares y cuantos son impares. La entrada de datos termina cuando el usuario teclea 0 o un valor no numérico.*/
let numeros = [];
let par = 0;
let impar = 0;
while (true) {
    let num = prompt("Ingrese un número: ");
    if (isNaN(num) || num == 0) {
        break;
        }
        numeros.push(num);
        if (num % 2 == 0) {
            par++;
            } else {
                impar++;
                }
                }
                alert("Los números ingresados son: " + numeros.join(", "));
                alert("Hay " + par + " números pares y " + impar + " números impares.");

                




