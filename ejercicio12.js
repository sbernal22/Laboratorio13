function contarLetras(texto){
    texto=texto.toLowerCase();
    let mapaLetras=new Map();
    for(let letra of texto){
        if(mapaLetras.has(letra)){
            let valor=mapaLetras.get(letra);
            mapaLetras.set(letra, valor+1);
        }
        else{
            mapaLetras.set(letra, 1);
        }
    }
    return mapaLetras;
}
console.log(contarLetras("banana"));