let num = window.document.getElementById('txtn')
let lista = window.document.getElementById('flista')
let res = window.document.getElementById('res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
} 

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML= ''
    } else {
        alert('O número é inválido ou já foi adicionado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        alert('Adicione um número antes de finalizar')
    } else {
        let tot = valores.length 
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/tot
        res.innerHTML += `<p>Ao todo, temos ${tot} númenos cadastrados. <br></p>`        
        res.innerHTML += `<p>O maior valor foi ${maior}. <br></p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}. <br></p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}. <br></p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}. <br></p>`
    }

    

}