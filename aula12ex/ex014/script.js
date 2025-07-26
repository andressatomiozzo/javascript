function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var teste = window.document.getElementsByTagName('section')[0]
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora < 12) {
        img.src = 'foto_manha.png'
        document.body.style.background = '#e2cd9f'
        teste.style.background = 'lightgray'
    } else if (hora <= 18){
        img.src = 'foto_tarde.png'
        document.body.style.background = '#b9846f'
    } else{
        img.src = 'foto_noite.png'
        document.body.style.background = '#515154'
    }
}
