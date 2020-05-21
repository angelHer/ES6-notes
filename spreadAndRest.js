/**
 * *Spread
 * ? Expande los valores de una matriz o un string
*/

const numeros = [1, 2, 3, 4, 5]
console.log(...numeros)

const str = 'Hola mundo!'
console.log(...str)

// Pasar matrices como argumentos
function sumar(a, b, c, d, e) {
  return a + b + c + d + e
}
console.log(sumar(...numeros))


// Clonar matrices y objetos
const numerosCopia = [...numeros]
numeros.push(6)
console.log(numeros, numerosCopia)

const datos = {nombre: 'Angel', ciudad: 'cdmx'}
const datosCopia = {...datos}
console.log(datosCopia)

/**
 * *Fusionar matrices y objetos
 * si en un objeto hay dos llaves iguales, se toma el valor del ultimo objeto
 */
const preferencias = {color: 'azul', bebida: 'whisky', ciudad: 'pachuca'}
const persona = {...datos, ...preferencias}
console.log(persona)

/**
 * *Rest
 * ? Representa un numero infinito de argumentos como matriz
*/
function sumar2(...argumentos) {
  return argumentos.reduce((current, total) => current + total)
}

// Se puede usar spread varias veces
const numeros2 = [45, 78, 32]
console.log(sumar2(...numeros, ...[55], ...numeros2, 23, 99))

/**
 * Ejemplo final
 */
const mapState = {
  loggedIn() {
    return true
  },
  isMember() {
    return false
  }
}
const computed = {
  ...mapState,
  computedProp() {
    return null
  }
}

console.log(computed)