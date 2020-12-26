/*const crear = {
    crear: {
        demand: true,
        alias: 'd'
    }
}

const actualizar = {
    actualizar: {
        alias: 'a',
        demand: true,
        completado: 'c'
    }
}*/

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea de la lista', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}