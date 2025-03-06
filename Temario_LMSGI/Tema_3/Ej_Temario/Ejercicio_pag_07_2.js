"use strict"

let empleado={
    nombre: "Juan",
    edad: 87,
    fijo: false,
    estadoJubilado:function(){
        if (this.edad>65) {
            return true
        } else {
            return false
    }
},
nivelExperiencia:function(){
    if ((this.edad>18) && (this.edad<25) ){
        return "Junior"
    }
    if ((this.edad>26) && (this.edad<45) ){
        return "Asociado"
    }
    if ((this.edad>46) && (this.edad<60) ){
        return "Senior"
    }
    if ((this.edad>61) && (this.edad<65) ){
        return "Experto"
    }
    if (this.edad>65) {
        return "No aplicable"
    }



    
}}
