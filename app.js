// Forma JS
var x = function(a) {
  return a;
}

console.log(x('Funcion JS'));

// ECS 6, Fat arrow
var x1 = a => a;
console.log(x1('Fat Arrow ECS6 con un parametro'));

var x2 = (a,b) => a + ' ' + b;
console.log(x2('Fat Arrow ECS6 con dos', 'parametros'));

var x3 = () => 'Fat Arrow sin parametros';
console.log(x3());

setTimeout( ()=> console.log('Llamando desde otra funcion'), 1000);

var x4 = () => {
  var y = 'Funcion con mas de';
  var z = 'una linea';
  console.log(y + ' ' + z);
}

x4();