/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var resultado = [];
   for(var i in objeto) {
      var elementoDeObjeto = [];
      var elementoDeObjeto = [i, objeto[i]];
      resultado.push(elementoDeObjeto);
   }
   return resultado
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let resultado = {};
   for (let i = 0; i < string.length; i++) {
      let objetoTemporal= string[i];
      if (resultado[objetoTemporal]) {
         resultado[objetoTemporal] +=1;
      } else {
         resultado[objetoTemporal] = 1;
      }
   }
   const resultadoOrdenado = Object.fromEntries(
      Object.entries(resultado).sort((a, b) => a[0].localeCompare(b[0]))
   );
   return resultadoOrdenado;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let resultadoMayusculas = [];
   let resultadoMinusculas = [];
 
   for (let i = string.length - 1; i >= 0; i--) {
     const currentChar = string[i];
 
     if (currentChar === currentChar.toUpperCase()) {
       resultadoMayusculas.unshift(currentChar);
     } else {

       resultadoMinusculas.unshift(currentChar);
     }
   }
 
   const resultadoFinal = resultadoMayusculas.concat(resultadoMinusculas);
 
   return resultadoFinal.join('');
}

function asAmirror(frase) { 
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras = frase.split(" ");

   var palabrasInvertidas = palabras.map(function(palabra) {
     return palabra.split("").reverse().join("");
   });
 
   var resultado = palabrasInvertidas.join(" ");
 
   return resultado;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numeroString = numero.toString();

  var numeroInvertido = numeroString.split("").reverse().join("");
   if (numeroInvertido === numeroString) {
      return "Es capicua";
   } else {
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var resultado = [];
   for (let i = 0; i < string.length; i++) {
      if (string[i] !== "a" && string[i] !== "b" && string[i] !== "c") {
         resultado.push(string[i])
      }
   }
   return resultado.join('')
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   function compararLongitudes (a, b) {
return (a.length - b.length)
   }
   const arregloOrdenado = arrayOfStrings.sort(compararLongitudes)
   return arregloOrdenado
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var resultado = [];
   for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i])) {
         resultado.push(array1[i])
      }
   }
   return resultado
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
