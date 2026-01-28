let n = []
let res = window.document.getElementById('res')

function adicionar(){
    let txtnum = window.document.getElementById('txtn')
    let num = Number(txtnum.value)
    if (txtnum.value.length == 0){
        alert('Digite um número')
    } else if (num < 1 || num > 100 || n.indexOf(num) != -1){
        alert('Digite um número válido')
    } else {
        n.push(num)

        let armaz = window.document.getElementById('armaz')
        armaz.innerHTML += `O número ${num} foi adicionado. <br>`
    }
    
    res.innerHTML = `` 

}






function finalizar(){
    if (n.length == 0){
        alert('Adicione um número antes de finalizar')
    } 

    n.sort()

    let soma = 0
    for (let c = 0; c < n.length; c++) {
        soma += n[c]
    }
/*     for (let c in n){
        soma += n[c]
    } */
    let media = soma / n.length


   
    res.innerHTML += `Ao todo, temos ${n.length} númenos cadastrados. <br>`
    res.innerHTML += `O maior valor foi ${n[n.length - 1]}. <br>`
    res.innerHTML += `O menor valor informado foi ${n[0]}. <br>`
    res.innerHTML += `Somando todos os valores, temos ${soma}. <br>`
    res.innerHTML += `A média dos valores digitados é ${media.toFixed(2)}. <br>`
}