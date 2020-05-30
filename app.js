const {crearArchivo,multiplicacionBaseLimite}=require('./multiplicar/multiplicar');
const {argv}=require('./Config/yargs');
const color=require('colors');
let comando=argv._[0];
switch(comando)
{
case 'listar':
    multiplicacionBaseLimite(argv.base,argv.limite)
    .then(archivo=>{console.log(`Archivo creado ${archivo}`.green)})
    .catch(err=>{console.log(err)});
break;

case 'crear':
     crearArchivo(argv.base)
    .then(archivo=>{console.log(`Archivo creado ${archivo}`.blue)})
    .catch(err=>{console.log(err)});
break;

default:
 console.log('Comando no reconocido');

}



//console.log(multiplicar);
//crearArchivo;
//let base='5';
//console.log(process.argv);

/*
let argv=process.argv;
let parametro=argv[2];
let base=parametro.split('=')[1]
console.log(base);

crearArchivo(base)
.then(archivo=>{console.log(`Archivo creado ${archivo}`)})
.catch(err=>{console.log(err)});

*/
