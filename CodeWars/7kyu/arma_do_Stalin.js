// Regras
// O primeiro elemento sempre sobrevive.
// Cada elemento seguinte sobrevive apenas se for maior ou igual ao sobrevivente anterior.
// A ordem dos sobreviventes é preservada.
// Um array vazio permanece inalterado.
// Opcionalmente, imprima "Расстрелять!"na saída padrão (stdout) cada elemento eliminado.

const stalinSort = (array) => {
  let maior = array[0];
  let traidores = [];
  array.forEach((numero, i) => (numero < maior ? traidores.push(i) : (maior = numero)));
  for (let i = 0; i < traidores.length; i++) array.splice(traidores[i] - i, 1);
  return console.log(array);
};

stalinSort([5, 2, 4, 8, 6]);
