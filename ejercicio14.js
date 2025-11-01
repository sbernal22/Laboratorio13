function gestionarEmpleados (empleados){
    const areas=new Map();
    for(let empleado of empleados) {
        let area=empleado.area;
        if (areas[area]==undefined) {
            areas[area]={
                empleados: [],
                promedio: 0
            };
        }
        areas[area].empleados.push(empleado.nombre);
    }
    for(let area in areas){
        let totalSalario=0;
        let cantidadEmpleados=0;
        for(let empleado of empleados){
            if(empleado.area==area){
                totalSalario+=empleado.salario;
                cantidadEmpleados++;
            }
        }
        areas[area].promedio=totalSalario/cantidadEmpleados;
    }
    return areas;
};
const listaEmpleados = [
    { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
    { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
    { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
    { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 }
];
console.log(gestionarEmpleados(listaEmpleados));