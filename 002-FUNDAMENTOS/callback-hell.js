const empleados=[
    {
        id:1,
        nombre: 'Marco'
    },
    {
        id:2,
        nombre: 'Jessica'
    },
    {
        id:3,
        nombre: 'Novak'
    }
]

const salarios=[
    {
        id:1,
        salario: 1000
    },
    {
        id:2,
        salario: 1500
    },
    {
        id:3,
        salario: 2000
    }
]
const getEmpleado=(id,callback)=>{
    const empleado=empleados.find(e=>e.id===id)
    if(empleado){
        callback(null, empleado);
    }else{
        callback( `Empleado con ID ${id} no existe`);
    }

    return empleado;
}

getEmpleado(1,(err,empleado)=>{
    if(err){
        console.log('ERROR');
        return console.log(err);
    }
    console.log('Empleado Existe');
    console.log(empleado);
})

