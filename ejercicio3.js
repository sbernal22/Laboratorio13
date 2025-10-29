function doblarNumeros(arr=[0]){
    for(let i=0; i<arr.length; i++){
        arr[i]*=2;
    }
    return arr;
}
console.log(doblarNumeros([1, 2, 3, 4]));