/**
 * *Manejo de variables let y const
 */

function letTest() {
  if (true) {
    let nx = 10; //Si se cambia let por var no se elimina la variable y si imprime el valor fuera
    console.log('EL valor dentro', nx);
  }
  // console.log('EL valor fuera', nx); //Imprimira error
}


/**
 * * Uso de const
 */

const vConst = 10;
console.log("Antes de cambiar valor", vConst);
// vConst = 1;
// console.log("Despues de modificar valor", vConst); //Imprime error

letTest();