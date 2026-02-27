let valores = [8, 9, 8, 2, 5, 7, 1]

console.log(valores)

/* for (let pos = 0; pos < valores.length; pos ++){
    console.log(`O valor do vetor na posição ${pos} é ${valores[pos]}`)
} */

for (let pos in valores){
    console.log(`O valor do vetor na posição ${pos} é ${valores[pos]}`)
}