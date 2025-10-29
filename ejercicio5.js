function reordenarPalabras(oracion=""){
    let arreglo=[], palabra="";
    arreglo=oracion.split(" ");
    for(let i=0; i<arreglo.length; i++){
        arreglo[i]=arreglo[i].toUpperCase();
    }
    return arreglo.sort(); 
}
console.log(reordenarPalabras("Esta es una oracion"));