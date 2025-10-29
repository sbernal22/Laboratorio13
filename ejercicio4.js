function filtrarYTransformar(arr){
    let suma=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>=0){
            arr[i]**=2;
            suma+=arr[i];
        }
    }
    return suma;
}
console.log(filtrarYTransformar([1, -2, 3]));