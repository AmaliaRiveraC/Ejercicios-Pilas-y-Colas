//ejercicio 3 pilas y colas
var numeroUsuarios = parseInt(prompt("Cuantos usuarios deseas ingresar"));
var usuario = [];
var registro = function(){
  for (var i = 0; i < numeroUsuarios; i++) {
    var nombreUsuario = prompt("Ingresa el nombre del usuario " + i);
    usuario.push(nombreUsuario);
    document.write(usuario[i] + "<br>");
  }
}
registro();

function Queue() {
  this.dataStore = Array.prototype.slice.call(arguments, 0);
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.empty = empty;
  this.print = print;

  function enqueue (element) {
    this.dataStore.push(element);
  }
  function dequeue () {
    return this.dataStore.shift();
  }
  function empty () {
    return this.dataStore.length == 0;
  }
  function print(element) {
    return console.log(this.dataStore);
  }
}
