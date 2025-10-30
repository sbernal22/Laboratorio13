function contarPalabras(texto=""){
    const palabras=new Map();
    texto=texto.toLowerCase();
    let palabraActual = "";
    for(let i=0; i<texto.length; i++){
        if(texto[i] !== " ")
            palabraActual+=texto[i];
        else{
            if(palabraActual !== ""){
                if(palabras.has(palabraActual))
                    palabras.set(palabraActual, palabras.get(palabraActual)+1);
                else
                    palabras.set(palabraActual, 1);
                palabraActual = "";
            }
        }
    }
    if(palabraActual !== ""){
        if(palabras.has(palabraActual))
            palabras.set(palabraActual, palabras.get(palabraActual)+1);
        else
            palabras.set(palabraActual, 1);
    }
    return palabras;
}
console.log(contarPalabras("este este buenos dias dias"));