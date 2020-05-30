const objeto={
    base:  {
            demand:true,
            alias:'b'
           },
    limite:{
            alias:'l',
            default:10
            }

}


const argv=require('yargs')
.command('listar','Imprime en consola la tabla de multiplicar',objeto)
.command('crear','Crea la tabla de multiplicar',objeto)
.help()
.argv;
module.exports={
  argv
}