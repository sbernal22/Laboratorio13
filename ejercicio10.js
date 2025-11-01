function invertirMap(map){
    let nuevoMapa=new Map();
    for(let [clave, valor] of map){
        nuevoMapa.set(valor, clave);
    }
    return nuevoMapa;
}
let capitales = new Map([ 
    ["Perú", "Lima"], 
    ["Chile", "Santiago"] 
]);
console.log(invertirMap(capitales));