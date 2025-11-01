function contarLetras(texto){
    texto=texto.toLowerCase();
    let objetoLetras={};
    for(let letra of texto){
        if(objetoLetras[letra]==undefined){
            objetoLetras[letra]=1;
        }
        else{
            objetoLetras[letra]++;
        }
    }
    return objetoLetras;
}
console.log(contarLetras("banana"));