function contar(){
    let inicio = window.document.getElementById('txtni')
    let fim = window.document.querySelector('input#txtnf')
    let passo = window.document.getElementById('txtnp')
    let area = window.document.querySelector('div#area')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.lenth == 0){
        area.innerHTML = 'Impossível contar'
        window.alert('[ERRO] Faltam dados')
    } else {
        area.innerHTML = 'Contando <br>'
        let i = Number (inicio.value)
        let f = Number (fim.value)
        let p = Number (passo.value)
        if (p <= 0){
            area.innerHTML = 'Impossível contar, vou considerar passo = 1'
            p = 1
        }
        if( i < f){
            //contagem crescente
            for (let c = i; c <= f; c += p){
                area.innerHTML += `${c} \u{1f449} `
            }
        } else {
             //contagem decrescente
            for (let c = i; c >= f; c -= p){
                area.innerHTML += `${c} \u{1f449} `
            }
        }
        area.innerHTML += `\u{1f3c1}`
    }
}