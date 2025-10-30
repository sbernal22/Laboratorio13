let productos = new Map([
    ["Arroz", 4.50], 
    ["Papa", 2.50], 
    ["Leche", 4.00]
]);
const lista=["Arroz", "Papa", "Leche", "Papa"];
let total=0;
for(let i=0; i<lista.length; i++){
    if(productos.has(lista[i])){
        total+=productos.get(lista[i]);
    }
}
console.log("Total: "+total);