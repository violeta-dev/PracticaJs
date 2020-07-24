import { convromano } from './convromano.mjs';
import { convarabico } from './convarabico.mjs';
import * as fs from 'fs';

var data = fs.readFileSync('datosin.json', 'utf-8');
var num = JSON.parse(data).numero;
console.log (`Convertimos ${num}`)
for(let i=0; i<num.length; i++){
  if (isNaN (num[i])){
    console.log('Comprobamos si es romano y convertimos');
    console.log (num [i]);
    var arabico  = convarabico(num[i]);
    console.log (arabico);
    fs.writeFileSync("./arabicos.json", JSON.stringify ({ numero : [arabico]}));
    console.log("Archivo creado");
        
  } else{
    console.log('Comprobamos si es arábico y convertimos');
    console.log (num [i]);
    var romano = convromano(num[i]);
    console.log (romano);
    fs.writeFileSync("./romanos.json", JSON.stringify ({numero: [romano]}));
    console.log("Archivo creado");
     
  }
}
  
      
        
      
    
  



  





