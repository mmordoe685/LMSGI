// Crear un array con 100 números aleatorios entre 1 y 100
let numeros = [];
for (let i = 0; i < 100; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1);
}

// Calcular la suma de todos los números del array
let suma = numeros.reduce((acumulador, valor) => acumulador + valor, 0);

console.log("El sumatorio de todos los números es: " + suma);
