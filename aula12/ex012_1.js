var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 6){
    console.log('Vai dormir meu filho')
} else if(hora < 12){
    console.log('Boom dia. Bora trabalhar!')
} else if (hora < 18){
    console.log('Boa tarde, vai um bolinho?')
} else {
    console.log('Boa noite meu fi, durma bem.')
}