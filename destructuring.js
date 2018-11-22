/**
 * Destructuring
 */

let foo = ['uno', 'dos', 'tres'];
let [uno, dos, tres] = foo;
console.log(uno);
console.log(dos);

let juana = {nombre: 'Juana', paterno: 'Apech'};
let juan = {nombre: 'JUan', paterno: 'Part'};

function nombreCompleto({nombre, paterno, materno = 'NA'}) {
  console.log(`Hola ${nombre} ${paterno} ${materno}`);
}

nombreCompleto(juana);
nombreCompleto(juan);