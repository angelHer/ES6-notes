/**
 * * Funcion Generadora
*/


function* rango(inicio, fin, incremento) {
  while (inicio < fin) {
    yield inicio; //Guarda el estado actual
    inicio += incremento;
  }
}

console.log('****Funcion Generadora ****');
for (let i of rango(0, 10, 2)) {
  console.log(i);
}

console.log('*** Fin funcion generadora ****');