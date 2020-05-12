/**
 * Destructuring
 */

/**
 * Destructuring arrays
 */
let foo = ['uno', 'dos', 'tres'];
let [uno, dos, tres] = foo;
console.log(uno);
console.log(dos);

/**
 * destructuring objetos
 */

//  Example 1
let juana = {nombre: 'Juana', paterno: 'Apech', materno: 'Sherbs'};
let juan = {nombre: 'JUan', paterno: 'Part'};

function nombreCompleto({nombre, paterno, materno = 'NA'}) {
  console.log(`Hola ${nombre} ${paterno} ${materno}`);
}

nombreCompleto(juana);
nombreCompleto(juan);

// Example 2

const alumno = {
  nombre: 'Theodor',
  apellido: 'Mosby',
  edad: 35,
  hermano: {
    nombre: 'Barney',
    apellido: 'Stinson'
  }
}
const {nombre, apellido, edad} = alumno
const {
  nombre:nombreHermano,
  apellido:apellidoHermano,
  edad:edadHermano = 'desconocida'
} = alumno.hermano
console.log(`alumno ${nombre} tiene el hermano ${nombreHermano} de edad ${edadHermano}`)

/**
 * Destructuring strings
 */
const direccion = 'Lago de patzcuaro, 144, 302b, 12345, CDMX'
const [calle, ext, int, cp, city] = direccion.split(',')

console.log(`Calle: ${calle} en ${city}`)