function verificar(){
    var data = new Date
    var ano_atual = data.getFullYear()
    var ano_nasc = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (ano_nasc.value.length == 0 || Number(ano_nasc.value) > ano_atual){
        window.alert('[ERRO] revise seus dados')
    } else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano_atual - Number(ano_nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe_homem.jpg')
            } else if (idade >=10 && idade < 21){
                img.setAttribute('src', 'jovem_masculino.jpg')
            } else if (idade >=21 && idade < 60){
                img.setAttribute('src', 'adulto_homem.jpg')
            } else {
                img.setAttribute('src', 'idoso_homem.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe_mulher.jpg')
            } else if (idade >=10 && idade < 21){
                img.setAttribute('src', 'jovem_mulher.jpg')
            } else if (idade >=21 && idade < 60){
                img.setAttribute('src', 'adulta_mulher.jpg')
            } else {
                img.setAttribute('src', 'idosa_mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que o sexo é ${genero} e tem ${idade} anos.`
        res.appendChild(img)
    }

}