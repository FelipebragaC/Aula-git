var lista = [1,10,3,5,2]
function comparaNumeros(a,b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; }

console.log(lista.sort(comparaNumeros))