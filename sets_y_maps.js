/**
 * *Sets y maps
 * Son parecidos a los objetos y son muy rapidos y eficientes en busquedas cuando hay muchos datos
 */

// Sets
// No permite diplicados
var s = new Set();
s.add('cadena1').add('cadena2').add('cadena1'); //Cadena1 se repite
console.log(s);
console.log(s.size === 2); // true
console.log(s.has('hola')); // false

// Maps
var m = new Map();
m.set('llave1', 20);
m.set('llave2', 30);
console.log(m.get('llave1'));