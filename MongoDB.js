//1) Crear una base de datos llamada empresas
//2) Crear las colecciones "usuarios", "empresas", "inventario".

db.createCollection('usuarios')
db.createCollection('empresas')
db.createCollection('inventario')


//3) Crear 10 usuarios con las propiedades: nombre, apellido, edad, sexo, salario, empresa.

db.usuarios.insertMany([
    { nombre: "Jose", apellido: "Montes", edad: 18, sexo: "masculino", salario: "500$", empresa: "Polar" },
    { nombre: "Maria", apellido: "Perez", edad: 25, sexo: "Femenino", salario: "2000$", empresa: "Pepsi" },
    { nombre: "Sara", apellido: "Hidalgo", edad: 22, sexo: "femenino", salario: "560$", empresa: "coca cola" },
    { nombre: "Edgar", apellido: "Barboza", edad: 25, sexo: "mascilino", salario: "530$", empresa: "nestle" },
    { nombre: "Pedro", apellido: "Cabrera", edad: 27, sexo: "masculino", salario: "400$", empresa: "chevron" },
    { nombre: "Maria", apellido: "Pena", edad: 19, sexo: "femenino", salario: "500$", empresa: "Pdvsa" },
    { nombre: "Doris", apellido: "Dominguez", edad: 36, sexo: "femenino", salario: "800$", empresa: "OTP" },
    { nombre: "Daniel", apellido: "Blanco", edad: 23, sexo: "masculino", salario: "1000$", empresa: "Gurve" },
    { nombre: "Junior", apellido: "DeFarias", edad: 27, sexo: "masculino", salario: "560$", empresa: "Ey" },
    { nombre: "Jesus", apellido: "Yepez", edad: 30, sexo: "masculino", salario: "750$", empresa: "Farmatodo" },

])

// 4) Crear 10 empresas con las propiedades: nombre, area, cantidad de empleados, fecha de fundacion.

db.empresas.insertMany([
    { nombre: "Polar", area: "Alimentos", cantidaddeempleados: "1500", fechade_fundacion: "1960" },
    { nombre: "Pepsi", area: "Alimentos", cantidaddeempleados: "1300", fechade_fundacion: "1960" },
    { nombre: "coca cola", area: "Alimentos", cantidaddeempleados: "1050", fechade_fundacion: "1965" },
    { nombre: "nestle", area: "Alimentos", cantidaddeempleados: "1500", fechade_fundacion: "1970" },
    { nombre: "chevrom", area: "petrolero", cantidaddeempleados: "1000", fechade_fundacion: "1950" },
    { nombre: "Pdvsa", area: "petrolero", cantidaddeempleados: "1060", fechade_fundacion: "1950" },
    { nombre: "OTP", area: "Construccion", cantidaddeempleados: "500", fechade_fundacion: "1990" },
    { nombre: "Gurve", area: "Medica", cantidaddeempleados: "600", fechade_fundacion: "1990" },
    { nombre: "Ey", area: "Finanzas", cantidaddeempleados: "800", fechade_fundacion: "1990" },
    { nombre: "Farmatodo", area: "Varios", cantidaddeempleados: "1000", fechade_fundacion: "2000" },
])


/*
5) Crear 10 inventarios con las propiedades: lista de productos fisicos (nombre,precio), lista de productos
digitales (nombre,precio), inversion de inventario, costo de venta.

*/
db.inventario.insertMany([
    {
        productos_fisicos: [{ nombre: 'harina pan', precio: 1 },
        { nombre: 'golden', precio: 0.5 }]
        , productos_digitales: [{ nombre: "echop_alimentosP", precio: 2 }],
        inversion: 900, Cventa: 800
    },

    {
        productos_fisicos: [{ nombre: 'doritos', precio: 2 },
        { nombre: 'pepitos', precio: 1 }]
        , productos_digitales: [{ nombre: "echop_alimP", precio: 2 }],
        inversion: 910, Cventa: 250
    },

    {
        productos_fisicos: [{ nombre: 'cocacola', precio: 3 },
        { nombre: 'agua', precio: 0.5 }]
        , productos_digitales: [{ nombre: "echop_coke", precio: 2 }],
        inversion: 930, Cventa: 750
    },

    {
        productos_fisicos: [{ nombre: 'aceitede_motor', precio: 10 },
        { nombre: 'refrigerante', precio: 5 }]
        , productos_digitales: [{ nombre: 'IAingenieria', precio: 6 }],
        inversion: 1100, Cventa: 900
    },

    {
        productos_fisicos: [{ nombre: 'gasolina', precio: 1 },
        { nombre: 'aceites', precio: 9 }]
        , productos_digitales: [{ nombre: "Pdvsa_echops", precio: 10 }],
        inversion: 1020, Cventa: 800
    },

    {
        productos_fisicos: [{ nombre: 'planos', precio: 30 },
        { nombre: 'presupuestos', precio: 40 }]
        , productos_digitales: [{ nombre: "autocad", precio: 15 }],
        inversion: 950, Cventa: 800
    },

    {
        productos_fisicos: [{ nombre: 'consumibles', precio: 20 },
        { nombre: 'radioterapia', precio: 50 }]
        , productos_digitales: [{ nombre: "medipad", precio: 60 }],
        inversion: 750, Cventa: 700
    },

    {
        productos_fisicos: [{ nombre: 'auditorias', precio: 50 },
        { nombre: 'fiscal', precio: 40 }]
        , productos_digitales: [{ nombre: "EyOnline", precio: 20 }],
        inversion: 900, Cventa: 850
    },

    {
        productos_fisicos: [{ nombre: 'samba', precio: 1 },
        { nombre: 'cocosette', precio: 0.5 }]
        , productos_digitales: [{ nombre: "echop_alimentos", precio: 2 }],
        inversion: 900, Cventa: 2000
    },

    {
        productos_fisicos: [{ nombre: 'desorante', precio: 2 },
        { nombre: 'medicamentos', precio: 15 }]
        , productos_digitales: [{ nombre: "farmatodoApps", precio: 10 }],
        inversion: 1900, Cventa: 2000
    },



])


// 6) Trae todos los usuarios que formen parte de una empresa con la informacion de la empresa.



db.usuarios.aggregate([{ $match: { empresa: 'Polar' } }, {
    $lookup: {
        from: 'empresas',
        localField: 'empresa',
        foreignField: 'nombre',
        as: 'inf_empresa'
    }
}, {
    $unwind: "$inf_empresa"
}])



//7) Trae todos los usuarios mayores a 35 annos y dales un bono de 250$.

// puse de 34 por que tengo solo un usuario.

db.usuarios.aggregate([
    {
        $match: {
            edad: { $gt: 35 }
        }
    },

    { $addFields: { bono: 250 } }

])


//8) Trae todas las empresas que tengan una cantidad de empleados mayores a 5.

db.empresas.find({cantidaddeempleados: {$gt:5}},{})


//9) Trae todos los usuarios cuyo nombre empiece por "E".

db.personas.find({nombre:/^E/i})


//10) Borra solo dos usuarios cuya edad sea menor a 20.


db.usuarios.deleteMany({ edad: { $lt: 20 } },{
        $limit : 2
    } )

