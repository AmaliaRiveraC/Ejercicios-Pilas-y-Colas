
//ejercicio 2 pilas y colas
var nombres = ["Amalia", "Nallely", "Rena", "Macky", "Nohemi"];
var apellidos = ["Rivera", "House", "Martinez", "Solorzano", "Guzman"];

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

var nombre = [];
while(nombres != 0){
  var a = nombres.shift();
  var b = apellidos.shift();
  var c = a + " " + b;
  nombre.push(c);
  console.log(nombre);
}
