"use strict";

const gestor_vectores = {
    vector_numeros: [],

    setDatos: function(vector) {
        this.vector_numeros = vector;
    },

    getMedia: function() {
        let suma = 0;
        for (let pos in this.vector_numeros) {
            suma += this.vector_numeros[pos];
        }
        return suma / this.vector_numeros.length;
    },

    getDesviacionMedia: function() {
        let media = this.getMedia();
        let sumaDesv = 0;
        for (let num of this.vector_numeros) {
            sumaDesv += Math.abs(num - media);
        }
        return sumaDesv / this.vector_numeros.length;
    },

    getMediana: function() {
        let vectorOrdenado = [...this.vector_numeros].sort((a, b) => a - b);
        let n = vectorOrdenado.length;
        let mitad = Math.floor(n / 2);
        
        if (n % 2 === 0) {
            return (vectorOrdenado[mitad - 1] + vectorOrdenado[mitad]) / 2;
        } else {
            return vectorOrdenado[mitad];
        }
    },

    getModa: function() {
        let frecuencia = {};
        let maxFrecuencia = 0;
        let modas = [];

        for (let num of this.vector_numeros) {
            frecuencia[num] = (frecuencia[num] || 0) + 1;
            if (frecuencia[num] > maxFrecuencia) {
                maxFrecuencia = frecuencia[num];
            }
        }

        for (let num in frecuencia) {
            if (frecuencia[num] === maxFrecuencia) {
            }
        }

        return modas;
    }
};

// Ejemplo de uso
gestor_vectores.setDatos([1, 2, 2, 3, 4, 4, 4, 5]);
console.log("Media:", gestor_vectores.getMedia());
console.log("Desviación Media:", gestor_vectores.getDesviacionMedia());
console.log("Mediana:", gestor_vectores.getMediana());
console.log("Moda:", gestor_vectores.getModa().join(", "));
