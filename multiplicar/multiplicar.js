const fs = require('fs');
//const fs = require('express'); no existe en la documentacion de node , son expansiones codigos 
//const fs = require('./fs'); ./ son archivos que nosostros escribimos y estan en nuestra computadora.
const color=require('colors');
let crearArchivo=(base)=>{

    return new Promise((resolve,reject)=>{
        if(!Number(base)){
          reject(`Èl valor ${base} no es un numero`);
          return;
        }

        let data='';
        
                for(let i=1;i<=10;i++){
                    data+=`${base}*${i} = ${base*i}\n`;
                }

            fs.writeFile(`Tablas/tabla-${base}.txt`,data,(err)=>{
                if(err) reject(err);
                resolve(`El archivo tabla ${base} ha sido creado`);
            });
    });


}


let multiplicacionBaseLimite=(base, limite)=>{
  return new Promise((resolve,reject)=>{
     if(!Number(base) || !Number(limite)){
      reject('--Para reaizar la tabla tienes que ingresar un entero--')
      return;
     }
    
     let data='';

        for(let i=1;i<=limite;i++){
         data+=`${base}*${i} = ${base*i}\n`;

        }
        fs.writeFile(`Tablas/tabla-${base}.txt`,data,(err)=>{
          if(err){
            reject(err);  
          }
          resolve(color.blue(`El archivo tabla ${base} ha sido crearo`));

        });

  });


}
module.exports={
    crearArchivo,
    multiplicacionBaseLimite
}