let valores = [9, 8, 1, 5, 6, 2]
valores.push[3]
valores.sort()
console.log(valores)
console.log(`O vetor tem ${valores.length} posições`)
console.log(`O primeiro valor é ${valores[0]}`)
let pos = valores.indexOf(10)
if (pos == -1){
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}