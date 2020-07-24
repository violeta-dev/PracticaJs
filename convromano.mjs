 export function convromano(n) {
    var
        resultado = [],
        valores = [1, 5, 10, 50, 100, 500, 1000],
		letras = ['I', 'V', 'X', 'L', 'C', 'D', 'M'],
		numero, insertar, letra, valores, posicion
    if (n <= 0 || n >= 3999) {
        console.log ('Introduzca un número entre 1 y 3999')
        return n;
    } else {
	 for(var i = 6; numero = valores[i], letra = letras[i]; i--) {
		if(n >= numero) {
			var r = Math.floor(n / numero);
			n -= r * numero; 
			if(r < 4){
				while(r--){
					resultado.push(letra);
				}
			} else {
				valores = resultado.pop(); 
				posicion = (valores ? letras.indexOf(valores) : i) + 1; 
				insertar = letra + (letras[posicion] || 'M'); 
				resultado.push(insertar);
			}
		} else {
			resultado.push('');
	 	}
	 }
    return resultado.join('');
    }
}

//console.log (convromano(20)); 