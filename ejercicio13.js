function combinarCatalogos(tiendaA, tiendaB){
    let catalogo={};
    for(let producto in tiendaA){
        catalogo[producto]=tiendaA[producto];
    }
    for(let producto in tiendaB){
        if(catalogo[producto]!==undefined){
            if (tiendaB[producto]<catalogo[producto]) {
                catalogo[producto]=tiendaB[producto];
            }
        }
        else {
            catalogo[producto]=tiendaB[producto];
        }
    }
    for (let producto in catalogo) {
        catalogo[producto]=Math.round(catalogo[producto]*100)/100;
    }
    return catalogo;
}
const tiendaA={
    laptop: 3500.5, 
    mouse: 100.35, 
    teclado: 250.9 
}
const tiendaB={
    mouse: 95.2, 
    monitor: 720.457, 
    teclado: 260.1
}
console.log(combinarCatalogos(tiendaA, tiendaB));