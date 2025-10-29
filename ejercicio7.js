function tieneDuplicados(arr){
    let nuevoSet=new Set(arr);
    return !(nuevoSet.size==arr.length);
}
console.log(tieneDuplicados([1, 2, 3, 3]));