export function convarabico(roman) {
    var letras = [' ','I','V','X','L','C','D','M']
    var valores = [0,1,5,10,50,100,500,1000]
    var anterior = 0;
    var suma = 0;
    var letra = ' ';
    if (/DD|LL|CCC|MMM|VV|XXX|III|[^IVXLCDM]|V[XLCDM]|L[CDM]|DM/.test(roman)){
     console.log ('Es un número romano inválido')
     return roman; 
    } else {
     for( var i = 0; i < roman.length; i++) {
      letra = roman.charAt(i);
     
      for(var j = 0; j < letras.length; j++){
        if(letra == letras[j]){                
            suma = suma + valores [j]; 
            
            if( anterior < valores[j]){ 
                suma = suma - anterior*2 ; 
                anterior = valores[j]; 
               
            }else {
                anterior = valores[j];
            }
        
        }              
    
      }
     }
    }
    return suma;
}
//console.log (convarabico('MM'))
