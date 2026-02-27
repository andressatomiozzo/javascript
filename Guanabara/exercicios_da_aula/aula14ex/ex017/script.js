function gerarTabela(){
    let num = window.document.getElementById('txtn')
    let areares = window.document.getElementById('seltab')

    if (num.value.length == 0){
        window.alert('[ERRO]Por favor digite um número válido')
    } else {
        let n = Number(num.value)
        areares.innerHTML = ''
        for (c = 1; c <=10; c++){
            let item = document.createElement('option')
            item.text = `${c} x ${n} = ${n*c}`
            item.value = `tab${c}`
            areares.appendChild(item)
        }
    }

    
}